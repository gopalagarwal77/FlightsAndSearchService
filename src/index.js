const express=require("express");
const bodyParser=require("body-parser");

const { port } = require('./config/serverConfig');    

const ApiRoutes = require('./routes/index');

const {Airport, City} = require('./models/index');

const db = require('./models/index');

  //require("dotenv").config();
//const port = process.env.port || 4000;
const setupAndStartServer =async() =>{

    // create the express object

    const app=express(); 
   // const PORT=3000;
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));

   app.use('/api',ApiRoutes);

    app.listen(port , async () =>{
       console.log(`server is running on port ${port}`);
//console.log(process.env);
       /* const airports = await Airport.findAll({
        include: City
       }); 
       console.log(airports); */
       if(process.env.SYNC_DB){
       db.sequelize.sync({alter: true});
       }
       /*const city = await City.findOne({
        where: {
          id: 3
        }
       });
       const airports = await city.getAirports();
      /*  await city.addAirport(newAirport);
       await city.addAirport({
        name:'Jindal Vijaynagar Airport'
       }) */
      /* const newAirport = await Airport.findOne({
        where: {
          id:11
        }
       });
       await city.addAirport(newAirport);*/ 
      /*  const newAirport = await Airport.create({
        name: 'Jindal Vijaynagar Airport',
        cityId: 5
       }) */
      // console.log(city, airports); 
    });

}

setupAndStartServer();
