"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// ----
const init_1 = require("./pkg/init");
const handle_1 = require("./pkg/admin/handle");
const config_1 = require("./config/config");
init_1.app.use(express_1.default.json());
init_1.app.use("/admin", handle_1.adminRouter);
init_1.app.listen(config_1.config.serverPost, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${config_1.config.serverPost}`);
});
//# sourceMappingURL=index.js.map