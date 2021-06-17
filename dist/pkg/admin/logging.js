"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logging = void 0;
const perf_hooks_1 = require("perf_hooks");
//-------------
const service_1 = require("./service");
const init_1 = require("../init");
class Logging extends service_1.Service {
    Add(request) {
        let timeStart = perf_hooks_1.performance.now();
        let response = super.Add(request);
        init_1.logger.info(`request: ${JSON.stringify(request)}`);
        init_1.logger.info(`response: ${JSON.stringify(response)}`);
        init_1.logger.info(`duration execute func: ${perf_hooks_1.performance.now() - timeStart}`);
        //remove err in object
        delete response.error.err;
        delete response.id;
        return response;
    }
}
exports.Logging = Logging;
//# sourceMappingURL=logging.js.map