const mongoose = require('mongoose')
const QuoAdSch = new mongoose.Schema({
    ticks:Array
})
module.exports = mongoose.model("quoadmin",QuoAdSch)