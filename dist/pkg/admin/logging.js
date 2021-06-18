"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logging = void 0;
const perf_hooks_1 = require("perf_hooks");
//-------------
const service_1 = require("./service");
const init_1 = require("../init");
class Logging extends service_1.Service {
    add(request) {
        const _super = Object.create(null, {
            add: { get: () => super.add }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let timeStart = perf_hooks_1.performance.now();
            let response = yield _super.add.call(this, request);
            init_1.logger.info(`request: ${JSON.stringify(request)}`);
            init_1.logger.info(`response: ${JSON.stringify(response)}`);
            init_1.logger.info(`duration execute func: ${perf_hooks_1.performance.now() - timeStart}`);
            //remove err in object
            delete response.error.err;
            // delete response.error.statusCode
            return response;
        });
    }
    login(request) {
        const _super = Object.create(null, {
            login: { get: () => super.login }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let timeStart = perf_hooks_1.performance.now();
            let response = yield _super.login.call(this, request);
            init_1.logger.info(`request: ${JSON.stringify(request)}`);
            init_1.logger.info(`response: ${JSON.stringify(response)}`);
            init_1.logger.info(`duration execute func: ${perf_hooks_1.performance.now() - timeStart}`);
            //remove err in object
            delete response.error.err;
            // delete response.error.statusCode
            return response;
        });
    }
}
exports.Logging = Logging;
//# sourceMappingURL=logging.js.map