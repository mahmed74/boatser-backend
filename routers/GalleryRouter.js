const express = require('express')
const router = express.Router()
const gallery = require('../db/models/Gallery')

router.route('/').get(async (req,res)=>{
    try{
    const result = await gallery.find()
    res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/album/:id').get(async (req,res)=>{
    try{
    const result = await gallery.findOne({_id:req.params.id})
    res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/').post(async (req,res)=>{
    try{
        const result = await gallery.create(req.body)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/:id').patch(async(req,res)=>{
    try{
    const result = await gallery.updateOne({_id:req.params.id},req.body)
    res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/:id').delete(async (req,res)=>{
    try{
        const result = await gallery.findByIdAndDelete(req.params.id)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
module.exports = router
