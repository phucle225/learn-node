import {performance} from "perf_hooks";
//-------------
import {Service} from './service'
import {RequestAdd, RequestLogin, ResponseAdd, ResponseLogin} from "./models";
import {logger} from '../init'

export class Logging extends Service {
    Add(request: RequestAdd): ResponseAdd {
        let timeStart = performance.now()
        let response = super.Add(request)
        logger.info(`request: ${JSON.stringify(request)}`)
        logger.info(`response: ${JSON.stringify(response)}`)
        logger.info(`duration execute func: ${performance.now() - timeStart}`)
        //remove err in object
        delete response.error.err
        delete response.id
        return response

    }

    Login(request: RequestLogin): ResponseLogin {
        let timeStart = performance.now()
        let response = super.Login(request)
        logger.info(`request: ${JSON.stringify(request)}`)
        logger.info(`response: ${JSON.stringify(response)}`)
        logger.info(`duration execute func: ${performance.now() - timeStart}`)
        //remove err in object
        delete response.error.err
        // delete response.id
        return response

    }
}
