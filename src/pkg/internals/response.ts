import {response, Response} from "express";
import {ResponseAdd} from "../admin/models";

export function WriteResponse(res:Response,statusCode:number,data:object){
    //to do
    res.status(statusCode).json(data)
    return
}