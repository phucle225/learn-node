import express from "express";
// ----
import {app} from "./pkg/init";
import {adminRouter} from "./pkg/admin/handle";
import {config} from "./config/config";
import {graphql} from "./pkg/graphql/handle";


app.use(express.json());
app.use("/admin", adminRouter)
app.use("/graphql",graphql)
app.listen(config.serverPost, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${config.serverPost}`);
});


