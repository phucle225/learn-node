import express from "express";
import {graphqlHTTP} from "express-graphql"
//---
import {schema} from "./models";
import {service} from "./service";



export let graphql = express.Router();

graphql.get("/get", graphqlHTTP({
    schema: schema,
    rootValue: service,
    graphiql: true,
}))