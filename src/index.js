var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var config = require('./config/config.json');
var jsonParser = bodyParser.json()
var app = express();
url_mongodb=`mongodb://${config['mongo-host']}:${config['mongo-port']}/${config['mongo-db']}`
var mongo = mongoose.connect(url_mongodb, {useNewUrlParser: true, useUnifiedTopology: true});

var handler = require('./pkg/admin/handler')

app.use(bodyParser.json())
app.use('/admin',handler.user_router)

var server = app.listen(config['server-port'], function () {
  var host = server.address().address
  var port = server.address().port
  console.log("run : http://%s:%s", host, port)
});

module.exports={
    mongo
}