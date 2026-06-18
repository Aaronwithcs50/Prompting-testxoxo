const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,channelId:String,messageId:{type:String,index:true},type:String,title:String,description:String,roles:[{roleId:String,emoji:String,label:String}]}, { timestamps: true, strict: true });
module.exports = mongoose.model('ReactionRole', schema);
