import {AppError} from "../internals/errors";
import {Type} from "class-transformer";

export class RequestAdd {
    username: string
    password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password

    }

    invalid() {
        if (this.username.length == 0 || this.password.length == 0) {
            throw new Error("request invalid")
        }
    }
}

export class ResponseAdd {
    id: string
    error: AppError
}


export class RequestLogin {
    username: string
    password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password

    }

    invalid() {
        if (this.username.length == 0 || this.password.length == 0) {
            throw new Error("request invalid")
        }
    }
}

export class ResponseLogin {
    id: string
    error: AppError
}