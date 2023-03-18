const mongoose = require('mongoose')

const FooterSite = new mongoose.Schema({
    punch:{
        type:String
    },
    list:{
        type:Array
    }
})

module.exports = mongoose.model('footer',FooterSite)