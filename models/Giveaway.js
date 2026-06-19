const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,channelId:String,messageId:{type:String,unique:true},prize:String,winners:{type:Number,default:1},winnerIds:[String],endAt:Date,active:{type:Boolean,default:true},requirements:mongoose.Schema.Types.Mixed,entrantIds:[String]}, { timestamps: true, strict: true });
module.exports = mongoose.model('Giveaway', schema);
