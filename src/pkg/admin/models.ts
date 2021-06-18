import {AppError} from "../internals/errors";
import {Type} from "class-transformer";

abstract class response {
    error: AppError
}

// Implement business logic ở đây
export class RequestAdd {
    username: string = ""
    password: string = ""

    constructor(object: { username: string, password: string }) {
        // let {username, password} = object
        // if (username != undefined && password != undefined) {
        //     this.username = username
        //     this.password = password
        // } else {
        //     this.username = ""
        //     this.password = ""
        // }
        Object.assign(this, object) //==> add to field
    }

    invalid() {
        if (this.username.length == 0 || this.password.length == 0) {
            throw new Error("request invalid")
        }
    }
}

export class ResponseAdd extends response{
    //to do
}


export class RequestLogin {
    username: string = ""
    password: string = ""

    constructor(object: { username: string, password: string }) {
        Object.assign(this, object)
    }

    invalid() {
        if (this.username.length == 0 || this.password.length == 0) {
            throw new Error("request invalid")
        }
    }
}

export class ResponseLogin extends response{
    id: string
}