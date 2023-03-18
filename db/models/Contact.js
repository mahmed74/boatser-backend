const mongoose = require('mongoose')
const CotactSch = new mongoose.Schema({
    fullname:{
        type: String,
        default:"Delete this"
    },
    email:{
        type:String,
        default:"delte this"
    },
    department:{
        type: String,
        default:"Delete this"
    },
    subject:{
        type:String,
        default:"Delete this"
    },
    reason:{
        type:String,
        default:"Delete this"
    },
    date:{
        type:Date,
        required:false,
        default:new Date().toLocaleTimeString()
    }
})
module.exports = mongoose.model("Contact",CotactSch)