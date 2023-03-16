const express = require('express');
const app = express();
const routes = require('./routes/routes')
const connectdb = require('./Db/db')
require('dotenv').config()
let port = 5000
// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))
// routes
app.get('/home',(req,res)=>{
    res.send(`welcome to the homePage`)
})

app.use('/api/v1/people',routes)

const start = async()=>{
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server running on port ${port}...!`)
        })

    } catch (error) {
        console.log(error);
        
    }
}

start()