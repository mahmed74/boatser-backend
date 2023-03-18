const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const Contact = require('../db/models/Contact')
require('dotenv').config()
router.route('/').get(async (req,res)=>{
    try{
        const auth = await bcrypt.compare(req.headers.token,process.env.DURJOY);
        const auth1 = await bcrypt.compare(req.headers.token,process.env.PETER)
        if(auth || auth1){
            const result = await Contact.find()
            res.status(200).json({result})
        }
    }
    catch(err){res.status(500).json(err)}
})
router.route('/').delete(async(req,res)=>{
    try{
        const auth = await bcrypt.compare(req.body.token,process.env.DURJOY);
        const auth1 = await bcrypt.compare(req.body.token,process.env.PETER)
        if(auth || auth1){
            const result = await Contact.deleteOne({_id:req.body.id})
            res.status(200).json({result})
        }
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/').post(async (req,res)=>{
    try{
    const result = await Contact.create(req.body)
    res.status(200).json({result})}
    catch{res.status(500).json({error:"Mara kheye gelum dada"})}
})

module.exports = router