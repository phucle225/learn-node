"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseAdd = exports.RequestAdd = void 0;
class RequestAdd {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    invalid() {
        if (this.username.length == 0 || this.password.length == 0) {
            throw new Error("request invalid");
        }
    }
}
exports.RequestAdd = RequestAdd;
class ResponseAdd {
}
exports.ResponseAdd = ResponseAdd;
//# sourceMappingURL=models.js.map