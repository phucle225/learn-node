

export class AppError {
    code: number
    msg: string
    err: Error

    constructor(code: number, msg: string, err: Error) {
        this.code = code
        this.msg = msg
        this.err = err
    }
}