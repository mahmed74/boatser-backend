const mongoose = require('mongoose')
const AboutSch = mongoose.Schema({
    about:String,
    user:String,
    testi:String,
    projects:String,
    charters:String,
    toggle:Array
})
module.exports = mongoose.model("AboutPage",AboutSch)