const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,userId:String,channelId:String,message:String,remindAt:Date,completed:{type:Boolean,default:false}}, { timestamps: true, strict: true });
module.exports = mongoose.model('Reminder', schema);
