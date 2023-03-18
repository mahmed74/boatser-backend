const express = require('express')
const router = express.Router()
const about = require('../db/models/AboutPage')

router.route('/').get(async(req,res)=>{
//     await about.create({about:'We video all the work we perform on your behalf. With the ability to view work done, anytime, anywhere, Keeps you in control of your project. With our exceptional video services, no project is too big or too small.\n\nAlong with videos, photos are provided showing before we begin, during the project, and completion, forming an easy to look at timeline of the work done. We cater to the owner who is away, the passerby and the live aboard residents.',
// user:'9',
// testi:'6',
// projects:'80',
// charters:'1',
// toggle:[{title:'Dependability',desc:'We accompany you in the realization of your needs. We are founded to satisfy the specific needs of our clients, building and retaining trust in the service industry with the ability to view anytime and anywhere at your convenience.'},
// {title:'Commissioning',desc:'It is important to bring to your attention that, with our help, we can arrange for you to visit your boat for any length of time. If you are interested, please let us know by emailing, calling, whatsapp, or use our Quotation Request Form and we will send you details.'},
// {title:'Special Services',desc:'Whether its to secure the vessel and its belongings before a storm, commission a boat for your arrival, haul out or launch, and the likes, you can rest assured that we perform your requested checklist backed by tagged videos.'}]})
    try{
     const result = await about.find()
     res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
    }
})
router.route('/').patch(async(req,res)=>{
    try{
        const result = await about.updateOne({_id:req.body.id},req.body)
        res.status(200).json({result})
        }catch(err){
            res.status(500).json(err)
        }
})

router.route('/toggle').delete(async(req,res)=>{
    try{
        const res1 = await about.find()
         const result = await about.updateOne({_id:req.body.id},{toggle:res1[0].toggle.filter((v,i)=>{
            return v.title !==req.body.data.title
        })})
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({err})
        console.log(err)
    }
})
module.exports = router