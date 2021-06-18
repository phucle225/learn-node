"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError {
    constructor(code, msg, statusCode, err) {
        this.code = 0;
        this.msg = "";
        this.err = "";
        this.statusCode = 200;
        this.code = code;
        this.msg = msg;
        this.statusCode = statusCode;
        if (err != null)
            this.err = err.toString();
    }
}
exports.AppError = AppError;
//# sourceMappingURL=errors.js.map