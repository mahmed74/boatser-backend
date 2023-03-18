const express = require('express')
const router = express.Router()
const orders = require('../db/models/Orders' )
const mailer = require('nodemailer')
const bcrypt = require('bcrypt')
require('dotenv').config()

let transporter = mailer.createTransport({
    host: "smtp.stackmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'shop@byachtservices.com', // generated ethereal user
      pass: process.env.MAILPASS, // generated ethereal password
    },
  });
const sendMail = async (order)=>{
    try{
    let info = await transporter.sendMail({
        from: '"Byatch Services" <shop@byachtservices.com>', // sender address
        to: order.email, // list of receivers
        subject: "We Have Received you order", // Subject line
        html: `<p><strong>Hello ${order.fullName},</strong></p>
        <p>We have received you order. Your Order ID is <span style="background-color: #000080; color: #ccffcc;"><em><strong>${order.orderID}</strong></em></span></p>
        <p>Total: <span style="font-size:2em; color:red">${order.total}$</span></p>
        <p>You have ordered:</p>
        <p>&nbsp;</p>  
        ${order.products.map((v,i)=> {
            return `<div style="display:flex; margin-top:20px"> 
            <img src="${v.thumb}" alt="Image Broken" height="auto" width="200px"/>
            <div style="margin-left:10px">
            <h3>${v.name}</h3>
            <h3 style="color:darkblue">${v.price}$</h3>
            <p style="color:#999">Qty: ${v.amount}</p>
            </div>
            </div>`
        })}`, // html body
    });
    if(info.accepted){
        console.log('Mail sent')
    }
    if(info.rejected){
        console.log('Mail jay nai')
    }
    }catch(err){
        console.log(err)
    }
    
}
router.route('/').get(async(req,res)=>{
    try{
        const auth = await bcrypt.compare(req.headers.token,process.env.DURJOY)
        const auth1 = await bcrypt.compare(req.headers.token,process.env.PETER)
        if(auth||auth1){
            const result = await orders.find()
            res.status(200).json({result})
        }
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/').delete(async(req,res)=>{
    try{
        const auth = await bcrypt.compare(req.body.token,process.env.DURJOY)
        const auth1 = await bcrypt.compare(req.body.token,process.env.PETER)
        if(auth||auth1){
            const result = await orders.deleteOne({_id:req.body.id})
            res.status(200).json({result})
        }
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/').post(async(req,res)=>{
    try{
        const result = await orders.create(req.body)
        sendMail(req.body)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
module.exports  = router  