"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Add = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
var adminSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    createTime: { type: Date, default: Date.now },
});
const admin = mongoose_1.default.model('admin', adminSchema);
function Add(username, password) {
    let error = null;
    let person = new admin({ username: username, password: password });
    person.save((err, object) => {
        if (err) {
            error = err;
            console.log(error);
            return;
        }
    });
    let index = person.id;
    console.log(error);
    return { index: index, error: error };
}
exports.Add = Add;
//# sourceMappingURL=admin.js.map