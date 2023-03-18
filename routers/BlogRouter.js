const express = require('express')
const router = express.Router()
const blog = require('../db/models/Blog')
const bcrypt = require('bcrypt')
require('dotenv').config()
router.route('/').get(async(req,res)=>{
    try{
        const result = await blog.find()
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/:id').patch(async(req,res)=>{
    try{
           const result = await blog.updateOne({_id:req.params.id},req.body)
           res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/').delete(async(req,res)=>{
    try{
        const auth = await bcrypt.compare(req.body.token,process.env.DURJOY)
        const auth1 = await bcrypt.compare(req.body.token,process.env.PETER)
        if(auth||auth1){
            const result = await blog.deleteOne({_id:req.body.id})
            res.status(200).json({result})
        }
    }catch(err){res.status(500).json({err})}
})
router.route('/').post(async(req,res)=>{
    try{
        const result = await blog.create(req.body)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/:id').get(async(req,res)=>{
    try{
        const result = await blog.findOne({_id:req.params.id})
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
module.exports = router