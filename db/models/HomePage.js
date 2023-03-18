const mongoose = require('mongoose')

const HomePageScheme = mongoose.Schema({
    title:String,
    desc:String,
    icon:String
})
module.exports = mongoose.model("home",HomePageScheme)