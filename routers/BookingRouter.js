const express = require('express')
const router = express.Router()
const Booking = require('../db/models/Booking')
router.route('/').get(async(req,res)=>{
    const result = await Booking.find()
    res.status(200).json({result})
})
router.route('/').post(async(req,res)=>{
    const result = await Booking.create(req.body)
    res.status(200).json({result})
})
module.exports = router