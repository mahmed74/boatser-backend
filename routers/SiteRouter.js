const express = require('express')
const router = express.Router()
const SiteData = require('../db/models/SiteData')
const Footer = require('../db/models/SiteFooter')
const bcrypt = require('bcrypt')
require('dotenv').config()

router.route('/').get( async (req,res)=>{
    const result = await SiteData.find()
    res.status(200).json({result})
})
router.route('/').patch(async (req,res)=>{
    const auth = await bcrypt.compare(req.body.token,process.env.DURJOY)
    const auth1 = await bcrypt.compare(req.body.token,process.env.PETER)
    if(auth||auth1){
        const result = await SiteData.updateOne({_id:req.body.id},req.body)
        res.status(200).json({result})
    }
})
router.route('/footer').post(async (req,res)=>{
    const auth = await bcrypt.compare(req.body.token,process.env.DURJOY)
    const auth1 = await bcrypt.compare(req.body.token,process.env.PETER)
    if(auth||auth1){
        const result = await Footer.create(req.body)
        res.status(200).json({result})
    }
})
router.route('/footer').patch(async(req,res)=>{
    const auth = await bcrypt.compare(req.body.token,process.env.DURJOY)
    const auth1 = await bcrypt.compare(req.body.token,process.env.PETER)
    if(auth||auth1){
        const result = await Footer.updateOne({_id:req.body.id},req.body)
        res.status(200).json({result})
    }
})
router.route('/footer').get(async (req,res)=>{
    const result = await Footer.find()
    res.status(200).json({result})
})
module.exports = router