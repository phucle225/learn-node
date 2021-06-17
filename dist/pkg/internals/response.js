"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteResponse = void 0;
function WriteResponse(res, statusCode, data) {
    //to do
    res.status(statusCode).json(data);
    return;
}
exports.WriteResponse = WriteResponse;
//# sourceMappingURL=response.js.map