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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const models_1 = require("./models");
const errors_1 = require("../internals/errors");
const mongoAdmin = __importStar(require("../mongo/admin"));
class Service {
    Add(request) {
        let response = new models_1.ResponseAdd();
        response.error = new errors_1.AppError(0, "", null);
        //check invalid
        try {
            request.invalid();
        }
        catch (e) {
            response.error = new errors_1.AppError(1, "request invalid", e);
            return response;
        }
        let { index, error } = mongoAdmin.Add(request.username, request.password);
        console.log(`index ${index}--- error : ${error}`);
        if (error != null) {
            response.error = new errors_1.AppError(2, "internal server error", error);
            return response;
        }
        response.id = index;
        return response;
    }
    Login(request) {
        let response = new models_1.ResponseLogin();
        response.error = new errors_1.AppError(0, "", null);
        //check invalid
        try {
            request.invalid();
        }
        catch (e) {
            response.error = new errors_1.AppError(1, "request invalid", e);
            return response;
        }
        let { person, error } = mongoAdmin.Login(request.username, request.password);
        if (error != null) {
            response.error = new errors_1.AppError(2, "internal server error", error);
            return response;
        }
        // if (person != null) {
        //     response.id = monoose.Schema(person).id
        // }
        return response;
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map