const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const testirouter = require('./routers/TestiRouter')
const siterouter = require('./routers/SiteRouter')
const contRouter = require('./routers/ContRouter')
const bookingRouter = require('./routers/BookingRouter')
const quotation = require('./routers/QuotationRouter')
const userrouter = require('./routers/UserRouter')
const homepage = require('./routers/HomePageRouter')
const aboutpage = require('./routers/AboutPageRouter')
const gallery = require('./routers/GalleryRouter')
const blog = require('./routers/BlogRouter')
const quoadmin = require('./routers/QuoAdmin')
const products = require('./routers/ProductRouter')
const cats = require('./routers/CatRouters')
const orders = require('./routers/OrderRouter')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use('/testimoinial',testirouter)
app.use('/sitedata',siterouter)
app.use('/contact',contRouter)
app.use('/booking',bookingRouter)
app.use('/quotation',quotation)
app.use('/users',userrouter)
app.use('/homepage',homepage)
app.use('/aboutpage',aboutpage)
app.use('/gallery',gallery)
app.use('/blog',blog)
app.use('/quo',quoadmin)
app.use('/products',products)
app.use('/cats',cats)
app.use('/orders',orders)
const port = 6900
app.get('/',(req,res)=>{ 
    res.send("Working...")
})

const dbconn = async ()=> {
    await mongoose.connect(process.env.DBURL).then(()=>{
        console.log("Connected to Database...")
    }).catch(err => console.log(err))
}
dbconn().then(()=>{
    app.listen(port, function(){console.log(`Listening on ${port}`)})
})