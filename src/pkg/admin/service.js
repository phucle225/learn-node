var admindb = require('../models/admin')
function Get(username,password,callback){
    admindb.GetByDefault(username,password,(error,user)=>{
        callback(error,user)
    })
    console.log("log service: ",username,password)
}

function Add(username,password,callback){
    admindb.Add(username,password,(error)=>{
        callback(error)
    })
    console.log("log service: ",username,password)
}

function Delete(username,password,callback){
    admindb.GetByDefault(username,password,(error)=>{
        callback(error)
    })
    console.log("log service: ",username,password)
}

module.exports={
    Get,
    Add,
    Delete
}