import {RequestAdd, RequestLogin, ResponseAdd, ResponseLogin} from "./models";
import {AppError} from "../internals/errors";
import * as mongoAdmin from "../mongo/admin";
import monoose from "mongoose";

export class Service {
    Add(request: RequestAdd): ResponseAdd {
        let response = new ResponseAdd()
        response.error = new AppError(0, "", null)
        //check invalid
        try {
            request.invalid()
        } catch (e) {
            response.error = new AppError(1, "request invalid", e)
            return response
        }
        let {index, error} = mongoAdmin.Add(request.username, request.password)
        console.log(`index ${index}--- error : ${error}`)
        if (error != null) {
            response.error = new AppError(2, "internal server error", error)
            return response
        }
        response.id = index

        return response
    }

    Login(request: RequestLogin): ResponseLogin {
        let response = new ResponseLogin()
        response.error = new AppError(0, "", null)
        //check invalid
        try {
            request.invalid()
        } catch (e) {
            response.error = new AppError(1, "request invalid", e)
            return response
        }
        let {person, error} = mongoAdmin.Login(request.username, request.password)
        if (error != null) {
            response.error = new AppError(2, "internal server error", error)
            return response
        }
        if (person != null) {
            response.id = monoose.Schema(person).id
        }
        return response
    }
}