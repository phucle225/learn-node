"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
var { buildSchema } = require('graphql');
//---
const models_1 = require("./models");
const service_1 = require("./service");
exports.graphql = express_1.default.Router();
exports.graphql.get("/get", express_graphql_1.graphqlHTTP({
    schema: models_1.schema,
    rootValue: service_1.service,
    graphiql: true,
}));
//# sourceMappingURL=handle.js.map