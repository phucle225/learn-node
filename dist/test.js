"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = require("./pkg/mongo/admin");
let a = admin_1.Add("123", "123");
a.then((index) => {
    console.log(index);
});
//# sourceMappingURL=test.js.map