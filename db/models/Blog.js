const mongoose = require('mongoose')
const BlogSch = new mongoose.Schema({
    title:String,
    desc:String,
    author:String,
    comment:Array,
    cat:String,
    thumb:String,
    date:String
})
module.exports = mongoose.model('blog',BlogSch)