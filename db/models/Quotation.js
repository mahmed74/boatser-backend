const mongoose = require('mongoose')
const QuoSch = new mongoose.Schema({
    fullname:String,
    phone:String,
    email:String,
    street:String,
    address2:String,
    cor:String,
    city:String,
    zip:String,
    country:String,
    boatname:String,
    boatmanu:String,
    boatyear:String,
    boatloc:String,
    boathull:String,
    presentloc:String,
    enginemanu:String,
    engineHour:String,
    engineHour2:String,
    servReq:String,
    sers:Array,
    details:String
})

module.exports = mongoose.model("QuoSch",QuoSch)