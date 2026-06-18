const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,name:String,response:String,enabled:{type:Boolean,default:true},uses:{type:Number,default:0}}, { timestamps: true, strict: true });
module.exports = mongoose.model('CustomCommand', schema);
