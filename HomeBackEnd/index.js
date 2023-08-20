const express= require('express');
const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');
const bd=require('body-parser');
const app= express();
const roomRoutes= require('./Routes/roomRoutes');
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(bd.json({limit:"50mb"}));


app.listen(3000,()=>{
    console.log("server up and running ");
})
