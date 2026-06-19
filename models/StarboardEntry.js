const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,channelId:String,messageId:{type:String,index:true},starboardMessageId:String,authorId:String,stars:{type:Number,default:0}}, { timestamps: true, strict: true });
module.exports = mongoose.model('StarboardEntry', schema);
