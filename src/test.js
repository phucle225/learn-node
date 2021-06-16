// var mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true},function(error) {
//     console.log(error)
//   })

// // var adminSchema = new Schema({
// //     username : String,
// //     password : String,
// //     createTime: { type: Date, default: Date.now },
// // })
// // const admin = mongoose.model('admin',adminSchema)
// // admin.findOne({username: "123"}, function(err,obj) { console.log(obj); });

// // var admin_new = new admin({username:"124",password:"124"})
// // admin_new.save(function (err) {
// //     if (err) return handleError(err);
// //     // saved!
// //   });

// const schema = new mongoose.Schema({ name: 'string', size: 'string' });
// const Tank = mongoose.model('Tank', schema);
// const small = new Tank({ size: 'small' });
// small.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });


var config = require('./config/config.json');
console.log(config.db)