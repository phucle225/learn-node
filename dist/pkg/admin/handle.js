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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
exports.adminRouter.post("/add", addUser);
exports.adminRouter.post("/login", login);
// Ở đây chỉ nên đọc request ra internal type và return response type
// Tên function viết thường
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let requestData = new models.RequestAdd(req.body);
        let respData = yield logging.add(requestData);
        return response_1.WriteResponse(res, respData.error.statusCode, respData);
    });
}
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let requestModel = new models.RequestLogin(req.body);
        let respData = yield logging.login(requestModel);
        return response_1.WriteResponse(res, respData.error.statusCode, respData);
    });
}
//# sourceMappingURL=handle.js.map