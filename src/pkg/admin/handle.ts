import express from "express";
import {Request, Response} from "express";
//----------
import * as models from "./models"
import {Logging} from "./logging";
import {WriteResponse} from "../internals/response";

export let adminRouter = express.Router();
var logging = new Logging()
//-router
adminRouter.post("/add", addUser)
adminRouter.post("/login", login)


// Ở đây chỉ nên đọc request ra internal type và return response type
// Tên function viết thường
async function addUser(req: Request, res: Response) {
    let requestData = new models.RequestAdd(req.body)
    let respData = await logging.add(requestData)
    return WriteResponse(res,respData.error.statusCode, respData)
}


async function login(req: Request, res: Response) {
    let requestModel = new models.RequestLogin(req.body)
    let respData = await logging.login(requestModel)
    return WriteResponse(res,respData.error.statusCode, respData)
}