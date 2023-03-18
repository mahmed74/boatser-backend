const mongoose = require('mongoose')
const TestimonialSchema = new mongoose.Schema({
    testimonial:{
        type: String,
        default:"Delete This"
    },
    name:{
        type:String,
        default:"Delete This"
    },
    position:{
        type: String,
        default:"Delete This"
    },
    approved: {
        type:Boolean,
        default: false
    }
})
module.exports = mongoose.model('Testimonial',TestimonialSchema)