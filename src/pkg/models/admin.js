const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../../index')

var adminSchema = new Schema({
    username : String,
    password : String,
    createTime: { type: Date, default: Date.now },
})

const admin = mongoose.model('admin',adminSchema)

function GetByDefault(username,password){
    console.log("log mongo: ",username,password)
    admin.findOne({username: '123'}, function(err,obj) { console.log(obj); });
}

module.exports={
    GetByDefault
}