const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')



const app = express()
const port = 8000
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
 mongoose.connect('mongodb+srv://joshua:Urasajoshua01@cluster0.yj89uvc.mongodb.net/',{
    
 }).then(()=>{
    console.log('connected');
 }).catch((error)=>{
    console.log('error',error);
 })


 app.listen(port,()=>{
    console.log('server is running');
 })