const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,userId:String,moderatorId:String,reason:String,active:{type:Boolean,default:true}}, { timestamps: true, strict: true });
module.exports = mongoose.model('Warning', schema);
