var mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true}).catch(error =>
console.log(error)
)
var adminSchema = new Schema({
    username : String,
    password : String,
    createTime: { type: Date, default: Date.now },
})
const admin = mongoose.model('admin',adminSchema)
admin.findOne({username: "123"}, function(err,obj) { console.log(obj); });