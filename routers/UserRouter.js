const express = require('express')
const router = express.Router()
const User = require('../db/models/Signup')
router.route('/').get(async (req,res)=>{
    const result = await User.find()
    res.status(200).json({result})
})
router.route('/').post(async(req,res)=>{
    const result = await User.create(req.body)
    res.status(200).json({result})
})
router.route('/:id').get(async (req,res)=>{
    const result = await User.findOne({uid:req.params.id})
    res.status(200).json({result})
})
module.exports = router