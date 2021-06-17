import monoose from "mongoose";
//----
import {mongo} from "../init";
import {config} from "../../config/config";

const Schema = monoose.Schema;

// Nên tận dụng logic validation ở đây
export let adminSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    createTime: {type: Date, default: Date.now},
})

const admin = monoose.model('admin', adminSchema)

export function Add(username: string, password: string): { index: string, error: Error } {
    let error: Error = null
    let person = new admin({username: username, password: password})
    // Tìm cách làm theo promise thay vì callback
    person.save((err, object) => {
        if (err) {
            error = err
            console.log(error)
            return
        }
    });
    let index: string = person.id
    console.log(error)
    return {index: index, error: error}
}

export function Login(username: string, password: string): { person: object, error: Error } {
    let error: Error = null
    let person = admin.findOne({username: username, password: password}, {}, {},
        (err, object) => {
            if (err) {
                error = err
                return
            }
        })
    console.log(error)
    return {person: person, error: error}
}