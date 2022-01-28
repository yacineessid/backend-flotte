require('dotenv').config()
const express =require('express');
const cors=require('cors')
const app=express()



app.use(express.urlencoded( {extended:true }));
app.use(express.json());
app.use(cors())

//routers
const userRoutes = require("./routes/userRoutes.js");
const entretienRoutes=require('./routes/entretienRoutes');
const transportRoutes=require('./routes/TransportRoutes');
const fournisseurRoutes=require('./routes/fournisseurRoutes');
const voitureRoutes=require('./routes/voitureRoutes');
const  réparationRoutes=require('./routes/reparationRoutes');
const conducteurRoutes=require('./routes/ConducteurRoutes')
const typeEntreRoutes=require('./routes/typeEntreRoutes')
const fournisseurEntretienRoutes=require('./routes/fournisseurEntretienRoutes')
const marqueRoutes=require('./routes/marqueRoutes')
const modelsRoutes=require('./routes/modelsRoutes')
const carburantRoutes=require('./routes/carburantRoutes')
app.use("/", userRoutes , entretienRoutes,transportRoutes,fournisseurRoutes,voitureRoutes,réparationRoutes,conducteurRoutes,
typeEntreRoutes,fournisseurEntretienRoutes ,marqueRoutes,modelsRoutes,carburantRoutes);



//testing api
app.get('/', (req,res)=>{
  res.json({message:'helow from api'})
})

//port
const PORT =process.env.PORT ||3000;
  
//server
app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
