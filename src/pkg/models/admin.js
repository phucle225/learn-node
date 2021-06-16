const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../../index')

var adminSchema = new Schema({
    username : String,
    password : String,
    createTime: { type: Date, default: Date.now },
})

const admin = mongoose.model('admin',adminSchema)

function GetByDefault(username,password,callback){
    // console.log("log mongo: ",username,password)
    admin.findOne({username: username,password:password},function(err, userObj){
        if(err){
            return callback(err,null);
        }
        return callback(null,userObj)
    })
}

function Add(username,password,callback){
    var person = new admin({username: username,password:password})
    person.save(function (err) {
            if (err){
                return callback(err)
            }
            return callback(null)
          });
}

function Delete(username,password,callback){
    admin.deleteOne({username: username,password:password},function(err){
        if(err){
            return callback(err);
        }
        return callback(null)
    })
}

module.exports={
    GetByDefault,
    Add,
    Delete
}