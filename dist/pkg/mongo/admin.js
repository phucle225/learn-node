"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.add = exports.adminSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//----
const Schema = mongoose_1.default.Schema;
// Nên tận dụng logic validation ở đây , tai vi struct request # struct save mongodb
exports.adminSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    createTime: { type: Date, default: Date.now },
});
const admin = mongoose_1.default.model('admin', exports.adminSchema);
function add(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        let index = "";
        // let error: Error = null
        let person = new admin({ username: username, password: password });
        // Tìm cách làm theo promise thay vì callback
        yield person.save().then((object) => {
            index = object.id;
        }).catch((err) => {
            if (err)
                throw err;
        });
        return index;
    });
}
exports.add = add;
function login(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        let person;
        yield admin.findOne({ username: username, password: password }, {}, {})
            .then((object) => {
            person = object;
        }).catch((err) => {
            if (err)
                throw err;
        });
        console.log(person);
        return { data: person };
    });
}
exports.login = login;
//# sourceMappingURL=admin.js.map