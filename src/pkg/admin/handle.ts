import express from "express";
import {Request, Response} from "express";
//----------
import * as models from "./models"
import {Logging} from "./logging";
import {WriteResponse} from "../internals/response";

export let adminRouter = express.Router();
var logging = new Logging()
//-router
adminRouter.post("/add", Add)
adminRouter.post("/login", Login)



// Ở đây chỉ nên đọc request ra internal type và return response type
// Tên function viết thường
function Add(req: Request, res: Response) {
    let {username, password} = req.body
    if (username == undefined || password == undefined || username.length == 0 || password.length == 0) {
        WriteResponse(res, 400, null)
        return
    }
    let requestModel = new models.RequestAdd(username, password)
    // console.log(requestModel)
    let respData = logging.Add(requestModel)
    WriteResponse(res, 200, respData)
}


function Login(req: Request, res: Response) {
    let {username, password} = req.body
    if (username == undefined || password == undefined || username.length == 0 || password.length == 0) {
        WriteResponse(res, 400, null)
        return
    }
    let requestModel = new models.RequestLogin(username, password)
    // console.log(requestModel)
    let respData = logging.Login(requestModel)
    WriteResponse(res, 200, respData)
}