const express = require('express');
const user_router = express.Router();

var service = require('./service')
var test = ()=>{
    console.log("test")
}

user_router.post('/get', function(req, res) {
    username=req.body.username
    password=req.body.password
    user=service.Get(username,password)
    res.send(user)
    
});

module.exports={
    user_router,test
}