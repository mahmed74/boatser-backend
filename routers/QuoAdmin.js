const express = require('express')
const router = express.Router()
const quo = require('../db/models/QuotationAdmin')
const quotitle = require('../db/models/QuoteTitle')
router.route('/').get(async(req,res)=>{
    try{
        const result = await quo.find()
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/').patch(async(req,res)=>{
    try{
        const result = await quo.updateOne({_id:req.body.id},{ticks:req.body.ticks})
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/title').patch(async (req,res)=>{
    try{
        const result = await quotitle.updateOne({_id:req.body.id},req.body)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/title').get(async (req,res)=>{
    try{
        const result = await quotitle.find()
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})


module.exports = router