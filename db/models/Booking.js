const mongoose = require('mongoose')
const BookingSch = new mongoose.Schema({
    fullname:{
        type:String,
        default:"Delete this"
    },
    email:{
        type:String,
        default:"Delete this"
    },
    phone:{
        type:String,
        default:"Delete this"
    },
    serreq:{
        type:String,
        default:"Delete this"
    },
    date:{
        type:Date,
        default:"Delete this"
    },
    reqdate:{
        type:Date,
        default: new Date().toLocaleDateString()
    }
})
module.exports = mongoose.model("Booking",BookingSch)