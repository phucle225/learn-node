"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const models_1 = require("./models");
let data = new models_1.person({ username: "test", password: "test" });
exports.service = {
    get: () => {
        return data.toString();
    },
};
//# sourceMappingURL=service.js.map