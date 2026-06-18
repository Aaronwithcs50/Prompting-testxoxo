const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,userId:String,channelId:{type:String,unique:true,sparse:true},ticketNumber:Number,status:{type:String,default:'open'},claimedBy:String,closedBy:String,closedAt:Date,transcriptPath:String}, { timestamps: true, strict: true });
module.exports = mongoose.model('Ticket', schema);
