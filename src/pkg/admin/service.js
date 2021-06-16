var admindb = require('../models/admin')
function Get(username,password){
    console.log("log service: ",username,password)
    return admindb.GetByDefault(username,password)
}

module.exports={
    Get
}