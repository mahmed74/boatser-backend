const express = require('express')
const router = express.Router()
const cats = require('../db/models/Categories')

router.route('/').get(async(req,res)=>{
    try{
        const result = await cats.find()
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})

router.route('/').post(async(req,res)=>{
    try{
        const result = await cats.create(req.body)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})

router.route('/').patch(async(req,res)=>{
    try{
        const result = await cats.updateOne({_id:req.body.id},req.body)
        res.status(200).json({result})
    }catch(err){
        res.status(200).json({err}) 
    }
})
router.route('/:id').delete(async(req,res)=>{
    try{
        const result = await cats.updateOne({_id:req.params.id},req.body)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
module.exports = router