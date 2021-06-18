"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseLogin = exports.RequestLogin = exports.ResponseAdd = exports.RequestAdd = void 0;
class response {
}
// Implement business logic ở đây
class RequestAdd {
    constructor(object) {
        this.username = "";
        this.password = "";
        // let {username, password} = object
        // if (username != undefined && password != undefined) {
        //     this.username = username
        //     this.password = password
        // } else {
        //     this.username = ""
        //     this.password = ""
        // }
        Object.assign(this, object); //==> add to field
    }
    invalid() {
        if (this.username.length == 0 || this.password.length == 0) {
            throw new Error("request invalid");
        }
    }
}
exports.RequestAdd = RequestAdd;
class ResponseAdd extends response {
}
exports.ResponseAdd = ResponseAdd;
class RequestLogin {
    constructor(object) {
        this.username = "";
        this.password = "";
        Object.assign(this, object);
    }
    invalid() {
        if (this.username.length == 0 || this.password.length == 0) {
            throw new Error("request invalid");
        }
    }
}
exports.RequestLogin = RequestLogin;
class ResponseLogin extends response {
}
exports.ResponseLogin = ResponseLogin;
//# sourceMappingURL=models.js.map