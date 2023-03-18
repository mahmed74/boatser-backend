const mongoose = require('mongoose')
const sitedataSc = new mongoose.Schema({
    email:{
        type:String
    },
    phone:{
        type: String
    },
    address:{
        type:String
    }
})
module.exports = mongoose.model('SiteData',sitedataSc)