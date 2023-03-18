const mongoose = require('mongoose')
const Ordersch = new mongoose.Schema({
    fullName:String,
    email:String,
    phone:String,
    address:String,
    city:String,
    products:Array,
    total:Number,
    status:Boolean,
    method:String,
    time:String,
    paypalID:String,
    orderID:String,
    paypalName:String,
    paypalAddress:String,
    paypalEmail:String
})
module.exports = mongoose.model("order",Ordersch)