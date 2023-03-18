const express = require('express')
const router = express.Router()
const Testimonial = require('../db/models/Testimonial')

router.route('/').post(async (req,res)=>{
    console.log('posted')
    console.log(req.body)
    try{
       const result = await Testimonial.create(req.body)
       res.status(200).json({result})
    }
    catch{
        res.status(500).json({error:"Testimonial Error"})
    }
})
router.route('/').get(async (req,res)=>{
    try{
        const result = await Testimonial.find()
        res.status(200).json({result})
    }
    catch{
        res.status(401).json({error:"Not Found Mama"})
    }
})
router.route('/').delete(async (req,res)=>{
    try{
        console.log(req.body.id)
        const result = await Testimonial.deleteOne({_id:req.body.id})
        res.status(200).json({result})
    }
    catch{
        res.status(401).json({error:"Pera kheye gelum dada :)"})
    }
})
router.route('/').patch(async (req,res)=>{
    try{
        const result = await Testimonial.updateOne({_id:req.body.id},{approved:true})
        res.status(200).json({result})
    }
    catch{
        res.status(401).json({error:"Pera kheye gelum dada :)"})
    }
})
module.exports = router