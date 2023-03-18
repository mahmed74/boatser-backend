const mongoose = require('mongoose')
const quotitle = new mongoose.Schema({
    title1:String,
    title2:String,
    title3:String,
    title4:String
})
module.exports = mongoose.model('quotitle',quotitle)