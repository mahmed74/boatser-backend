const mongoose = require('mongoose')
const catsch = new mongoose.Schema({
  type:String,
  cats:Array 
})
module.exports = mongoose.model('categories',catsch)