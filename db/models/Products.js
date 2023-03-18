const mongoose = require('mongoose')
const prosch = new mongoose.Schema({
    name:String,
    cat:String,
    price:String,
    desc:String,
    comment:Array,
    sale:Boolean,
    thumb:String
})
module.exports = mongoose.model('product',prosch)