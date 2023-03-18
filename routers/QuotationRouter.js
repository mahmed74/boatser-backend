const express = require('express')
const  router = express.Router()
const Quotation = require('../db/models/Quotation')
router.route('/').get(async (req,res)=>{
    const result = await Quotation.find()
    res.status(200).json({result})
})
router.route('/').post(async (req,res)=>{
    try {
    const result = await Quotation.create(req.body)
    res.status(200).json({result})   
    } catch (error) {
        res.send(200).json({error})
    }
})
router.route('/').get(async (req,res)=>{
    try{
    const result = await Quotation.find()
    res.status(200).json({result})
    }
    catch{
        res.status(500).json({error:"Something hapenned wrong"})
    }
})
module.exports = router