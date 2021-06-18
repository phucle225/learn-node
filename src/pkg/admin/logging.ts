import {performance} from "perf_hooks";
//-------------
import {Service} from './service'
import {RequestAdd, RequestLogin, ResponseAdd, ResponseLogin} from "./models";
import {logger} from '../init'

export class Logging extends Service {
    async add(request: RequestAdd): Promise<ResponseAdd> {
        let timeStart = performance.now()
        let response = await super.add(request)
        logger.info(`request: ${JSON.stringify(request)}`)
        logger.info(`response: ${JSON.stringify(response)}`)
        logger.info(`duration execute func: ${performance.now() - timeStart}`)
        //remove err in object
        delete response.error.err
        // delete response.error.statusCode
        return response

    }

    async login(request: RequestLogin): Promise<ResponseLogin> {
        let timeStart = performance.now()
        let response = await super.login(request)
        logger.info(`request: ${JSON.stringify(request)}`)
        logger.info(`response: ${JSON.stringify(response)}`)
        logger.info(`duration execute func: ${performance.now() - timeStart}`)
        //remove err in object
        delete response.error.err
        // delete response.error.statusCode
        return response

    }
}
