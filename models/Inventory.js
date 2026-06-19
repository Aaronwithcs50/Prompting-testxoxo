const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,userId:String,items:[{itemId:String,name:String,type:String,quantity:{type:Number,default:1},acquiredAt:{type:Date,default:Date.now}}]}, { timestamps: true, strict: true });
module.exports = mongoose.model('Inventory', schema);
