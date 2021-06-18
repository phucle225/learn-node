import monoose from "mongoose";
//----
import {mongo} from "../init";
import {config} from "../../config/config";

const Schema = monoose.Schema;

export let adminSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    createTime: {type: Date, default: Date.now},
})

const admin = monoose.model('admin', adminSchema)

    export async function Add(username: string, password: string): Promise<{ index: string, error: Error }> {
    let error: Error = null
    let person = new admin({username: username, password: password})
    await person.save((err, object) => {
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