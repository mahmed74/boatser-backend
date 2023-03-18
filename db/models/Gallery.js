const mongoose = require('mongoose')
const gallsch = new mongoose.Schema({
    title:String,
    sub:String,
    thumb:String,
    elems:Array
})
module.exports = mongoose.model('gallery',gallsch)