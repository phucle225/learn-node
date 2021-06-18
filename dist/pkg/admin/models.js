"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseLogin = exports.RequestLogin = exports.ResponseAdd = exports.RequestAdd = void 0;
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
class RequestLogin {
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
exports.RequestLogin = RequestLogin;
class ResponseLogin {
}
exports.ResponseLogin = ResponseLogin;
//# sourceMappingURL=models.js.map