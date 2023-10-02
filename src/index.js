const express=require("express");
const bodyParser=require("body-parser");

const { port } = require('./config/serverConfig');    
  //require("dotenv").config();
//const port = process.env.port || 4000;
const setupAndStartServer =async() =>{

    // create the express object

    const app=express(); 
   // const PORT=3000;
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));


    app.listen(port ,() =>{
       console.log(`server is running on port ${port}`);
//console.log(process.env);

    });

}

setupAndStartServer();
