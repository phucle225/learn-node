import express from 'express';
import monoose from 'mongoose';
import { format } from 'winston';
import winston from 'winston'
import redis from 'redis';
//-----
import {config} from "../config/config";

export const app = express();

const urlDatabase = `mongodb://${config.mongoHost}:${config.mongoPort}/${config.mongoDB}`

export let mongo = monoose.connect(urlDatabase,{useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex:true
});

export const clientRedis = redis.createClient(config.redisPort)



///edit logging winston
const { combine, timestamp, label, printf } = format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const timezoned = () => {
    return new Date().toLocaleString('VN', {
        timeZone: 'Asia/Ho_Chi_Minh'
    });
}
export let logger = winston.createLogger({
    level:'info',
    format: combine(
        label({ label: 'v1' }),
        timestamp({format:timezoned}),
        myFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'log/app.log' })
    ]
});