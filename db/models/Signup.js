const mongoose = require('mongoose')
const SignUpSch = mongoose.Schema({
    displayName:String,
    username:String,
    email:String,
    phone:String,
    uid:String
})
module.exports = mongoose.model('Account',SignUpSch)