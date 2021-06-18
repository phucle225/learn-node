export class AppError {
    code: number = 0
    msg: string = ""
    err: string = ""
    statusCode: number = 200

    constructor(code: number, msg: string, statusCode: number, err: Error) {
        this.code = code
        this.msg = msg
        this.statusCode = statusCode
        if (err != null) this.err = err.toString()
    }
}