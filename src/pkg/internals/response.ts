import {Response} from "express";
import {ResponseAdd} from "../admin/models";

export function WriteResponse(res:Response,statusCode: number, data: object): Response {
    //to do
    return res.status(statusCode).json(data)
}