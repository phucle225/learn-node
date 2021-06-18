"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
//----------
const models = __importStar(require("./models"));
const logging_1 = require("./logging");
const response_1 = require("../internals/response");
exports.adminRouter = express_1.default.Router();
var logging = new logging_1.Logging();
//-router
exports.adminRouter.post("/add", Add);
exports.adminRouter.post("/login", Login);
function Add(req, res) {
    let { username, password } = req.body;
    if (username == undefined || password == undefined || username.length == 0 || password.length == 0) {
        response_1.WriteResponse(res, 400, null);
        return;
    }
    let requestModel = new models.RequestAdd(username, password);
    // console.log(requestModel)
    let respData = logging.Add(requestModel);
    response_1.WriteResponse(res, 200, respData);
}
function Login(req, res) {
    let { username, password } = req.body;
    if (username == undefined || password == undefined || username.length == 0 || password.length == 0) {
        response_1.WriteResponse(res, 400, null);
        return;
    }
    let requestModel = new models.RequestLogin(username, password);
    // console.log(requestModel)
    let respData = logging.Login(requestModel);
    response_1.WriteResponse(res, 200, respData);
}
//# sourceMappingURL=handle.js.map