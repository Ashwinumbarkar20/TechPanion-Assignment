const express =require('express')
const dotenv=require('dotenv') 
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const mongoose =require("mongoose")
dotenv.config()
const cors=require("cors")
const { MongoClient, ServerApiVersion } = require('mongodb');
const empRoutes = require('./routes/employee.routes');
const prdRoutes = require('./routes/product.routes');
const app=express();
app.use(express.json())
app.use(cors())

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for Employee and Product management",
    },
    servers: [
      {
        url: "https://techpanion-assignment-1.onrender.com", 
      },
    ],
  },
  apis: ["./routes/employee.routes.js", "./routes/product.routes.js"], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



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




