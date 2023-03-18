const express= require('express')
const router = express.Router()
const products = require('../db/models/Products')

router.route('/').get(async(req,res)=>{
    try{
        const result = await products.find()
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/:id').get(async(req,res)=>{
    try{
        const result = await products.findOne({_id:req.params.id})
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/').post(async(req,res)=>{
    try{
        const result= await products.create(req.body)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})

router.route('/').patch(async(req,res)=>{
    try{
        const result = await products.updateOne({_id:req.body._id},req.body)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/').delete(async(req,res)=>{
    try{
        const result = await products.deleteOne({_id:req.body.obj._id})
        console.log(req.body._id)
    }catch(err){
        res.status(500).json({err})
    }
})
module.exports = router