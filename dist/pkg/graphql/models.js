"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.person = void 0;
const graphql_1 = require("graphql");
const Data = new Map();
class person {
    constructor(data) {
        this.username = "";
        this.password = "";
        Object.assign(this, data);
    }
}
exports.person = person;
exports.schema = graphql_1.buildSchema(`
  type Query {
    get: String
  }
`);
//# sourceMappingURL=models.js.map