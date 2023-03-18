const express = require('express')
const router = express.Router()
const home = require('../db/models/HomePage')
router.route('/').get(async (req,res)=>{
    const result = await home.find()
    res.status(200).json({result});
})
router.route('/').post(async(req,res)=>{
    home.create(req.body).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
})
router.route('/').delete(async(req,res)=>{
    const result = await home.findOneAndDelete({_id:req.body.id})
    res.status(200).json({result})
})
router.route('/').patch(async (req,res)=>{
    try{
    const result = await home.updateOne({_id:req.body.id},req.body)
    res.status(200).json({result})
    }
    catch(err){
        res.status(200).json({err})
    }
})
module.exports = router