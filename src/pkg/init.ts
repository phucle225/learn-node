import express from 'express';
import monoose from 'mongoose';
import winston from 'winston';
import redis from 'redis';
//-----
import {config} from "../config/config";

export const app = express();

const urlDatabase = `mongodb://${config.mongoHost}:${config.mongoPort}/${config.mongoDB}`

export let mongo = monoose.connect(urlDatabase,{useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex:true
});

export const clientRedis = redis.createClient(config.redisPort)

export let logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'log/app.log' })
    ]
});