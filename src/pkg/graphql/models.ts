import {buildSchema} from "graphql"

const Data = new Map()

export class person {
    username: string = ""
    password: string = ""

    constructor(data: object) {
        Object.assign(this, data)
    }
}

export var schema = buildSchema(`
  type Query {
    get: String
  }
`);



