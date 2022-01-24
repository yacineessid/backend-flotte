const db  =require('../models')

const Marque = db.marque_Voiture
//create  marque

const addMarque=async(req,res)=>{

    let newMarque={
        
        libelle:req.body.libelle
    }
    const marque = await Marque.create(newMarque)
    res.status(200).send(marque)
}



//get Marque
const getMarque=async(req,res)=>{

    let marques = await Marque.findAll({})
    res.status(200).send(marques)
}

module.exports={addMarque , getMarque}