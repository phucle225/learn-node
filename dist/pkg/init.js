"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.clientRedis = exports.mongo = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const winston_1 = __importDefault(require("winston"));
const redis_1 = __importDefault(require("redis"));
//-----
const config_1 = require("../config/config");
exports.app = express_1.default();
const urlDatabase = `mongodb://${config_1.config.mongoHost}:${config_1.config.mongoPort}/${config_1.config.mongoDB}`;
exports.mongo = mongoose_1.default.connect(urlDatabase, { useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true
});
exports.clientRedis = redis_1.default.createClient(config_1.config.redisPort);
exports.logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: 'log/app.log' })
    ]
});
//# sourceMappingURL=init.js.map