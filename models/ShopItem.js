const mongoose = require('mongoose');
const schema = new mongoose.Schema({guildId:String,name:String,price:Number,description:String,type:String,roleId:String,uses:{type:Number,default:1}}, { timestamps: true, strict: true });
module.exports = mongoose.model('ShopItem', schema);
