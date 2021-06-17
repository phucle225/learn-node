"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError {
    constructor(code, msg, err) {
        this.code = code;
        this.msg = msg;
        this.err = err;
    }
}
exports.AppError = AppError;
//# sourceMappingURL=errors.js.map