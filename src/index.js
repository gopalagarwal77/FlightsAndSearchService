<<<<<<< HEAD
const express=require("express");
const { port } = require('./config/serverConfig');    
  //require("dotenv").config();
//const port = process.env.port || 4000;
const setupAndStartServer =async() =>{

    // create the express object

    const app=express(); 
   // const PORT=3000;
    app.listen(port ,() =>{
       console.log(`server is running on port ${port}`);
//console.log(process.env);
    });

}

setupAndStartServer();



 
=======

>>>>>>> 046ac4f75b99e98b72a81183c13a93db40977e1a
