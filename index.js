const express =require('express')
const dotenv=require('dotenv') 
const mongoose =require("mongoose")
dotenv.config()
const cors=require("cors")
const { MongoClient, ServerApiVersion } = require('mongodb');
const empRoutes = require('./routes/employee.routes');
const prdRoutes = require('./routes/product.routes');
const app=express();
app.use(express.json())
app.use(cors())

// app.listen(process.env.PORT,()=>{
//            console.log("Server is Running...",process.env.PORT)
//       })

//Emp Route
app.use('/api/employees', empRoutes);
//Prdouct Routes
app.use('/api/products', prdRoutes);

mongoose.connect(process.env.MONGODBURI).
then(()=>{  
  console.log("Mongo connected")
  app.listen(process.env.PORT,()=>{
      console.log("Server is Running...",process.env.PORT)
  })}).
catch((e)=>{console.log("not Connected",e)})




