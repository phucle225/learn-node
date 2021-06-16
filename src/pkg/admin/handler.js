const express = require('express');
const user_router = express.Router();

var service = require('./service')
var test = ()=>{
    console.log("test")
}


user_router.post('/add', function(req, res) {
    username=req.body.username
    password=req.body.password
    user=service.Add(username,password,(error)=>{
        if (error){
            console.log("error: %s",error)
        }
        res.json({
            "code":0
        })
    })
    
});

user_router.post('/get', function(req, res) {
    username=req.body.username
    password=req.body.password
    user=service.Get(username,password,(error,user)=>{
        if (error){
            console.log("error: %s",error)
        }
        res.send(user)
    })
    
});

user_router.post('/delete', function(req, res) {
    username=req.body.username
    password=req.body.password
    service.Delete(username,password,(error,user)=>{
        if (error){
            console.log("error: %s",error)
        }
        res.json({
            "code":0
        })
    })
    
});

module.exports={
    user_router,test
}