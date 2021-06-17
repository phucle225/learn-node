import express from "express";
// ----
import {app} from "./pkg/init";
import {adminRouter} from "./pkg/admin/handle";
import {config} from "./config/config";


app.use(express.json());
app.use("/admin", adminRouter)
app.listen(config.serverPost, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${config.serverPost}`);
});