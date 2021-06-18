import monoose from "mongoose";
//----

const Schema = monoose.Schema;

// Nên tận dụng logic validation ở đây , tai vi struct request # struct save mongodb
export let adminSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    createTime: {type: Date, default: Date.now},
})

const admin = monoose.model('admin', adminSchema)

export async function add(username: string, password: string): Promise<string> {
    let index: string = ""
    // let error: Error = null
    let person = new admin({username: username, password: password})
    // Tìm cách làm theo promise thay vì callback
    await person.save().then((object) => {
        index = object.id
    }).catch((err) => {
        if (err) throw err
    })
    return index
}

export async function login(username: string, password: string): Promise<object> {
    let person:object
    await admin.findOne({username: username, password: password}, {}, {})
        .then((object) => {
            person=object
        }).catch((err) => {
            if (err) throw err
        })
    console.log(person)
    return {data:person}
}