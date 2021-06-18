"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.Add = exports.adminSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.adminSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    createTime: { type: Date, default: Date.now },
});
const admin = mongoose_1.default.model('admin', exports.adminSchema);
function Add(username, password) {
    let index = "";
    let error = null;
    let person = new admin({ username: username, password: password });
    person.save().then((object) => {
        index = object.id;
    }).catch((err) => {
        if (err) {
            error = err;
        }
    });
    console.log(error);
    return { index: index, error: error };
}
exports.Add = Add;
function Login(username, password) {
    let error = null;
    let person = admin.findOne({ username: username, password: password }, {}, {}, (err, object) => {
        if (err) {
            error = err;
            return;
        }
    });
    console.log(error);
    return { person: person, error: error };
}
exports.Login = Login;
//# sourceMappingURL=admin.js.map