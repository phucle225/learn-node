var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var app = express();
var mongo = mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var handler = require('./pkg/admin/handler')

app.use(bodyParser.json())
app.use('/admin',handler.user_router)

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("run : http://%s:%s", host, port)
});

module.exports={
    mongo
}