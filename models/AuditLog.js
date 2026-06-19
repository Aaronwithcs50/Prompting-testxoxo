const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,actorId:String,action:String,targetId:String,metadata:mongoose.Schema.Types.Mixed,source:{type:String,default:'bot'}}, { timestamps: true, strict: true });
module.exports = mongoose.model('AuditLog', schema);
