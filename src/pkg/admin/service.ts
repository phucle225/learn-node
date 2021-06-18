// Implement business logic ở model thay vì service

import {RequestAdd, RequestLogin, ResponseAdd, ResponseLogin} from "./models";
import {AppError} from "../internals/errors";
import * as mongoAdmin from "../mongo/admin";
import monoose from "mongoose";
import {promises} from "dns";
import {add} from "../mongo/admin";

export class Service {
    async add(request: RequestAdd): Promise<ResponseAdd> {
        let response = new ResponseAdd()
        response.error = new AppError(0, "", 200, null)
        //check invalid
        try {
            request.invalid()
        } catch (e) {
            response.error = new AppError(1, "request invalid", 400, e)
            return response
        }
        await mongoAdmin.add(request.username, request.password)
            .then((object) => {
                // response.id = object
            }).catch((err) => {
                response.error = new AppError(2, "internal server error", 400, err)
                return response
            })
        return response
    }

    async login(request: RequestLogin): Promise<ResponseLogin> {
        let response = new ResponseLogin()
        response.error = new AppError(0, "", 200, null)
        //check invalid
        try {
            request.invalid()
        } catch (e) {
            response.error = new AppError(1, "request invalid", 400, e)
            return response
        }
         await mongoAdmin.login(request.username, request.password)
            .then((object) => {
                // response.id = object
                console.log(object.toString())
            }).catch((err) => {
            response.error = new AppError(2, "internal server error", 400, err)
            return response
        })
        // if (person != null) {
        //     response.id = monoose.Schema(person).id
        // }
        return response
    }
}