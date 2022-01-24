const db=require('../models')


// create main Model
const Voiture= db.voiture

// 1 create voiture

const addVoiture=async(req,res)=>{
    let newVoiture={
        matricule:req.body.matricule,
        idMarque:req.body.idMarque,
        idModele:req.body.idModele,
        carburant:req.body.carburant,
        aquisition:req.body.aquisition,
        visite:req.body.visite,
        assurance:req.body.assurance,
    }
    const voiture= await Voiture.create(newVoiture)
    res.status(200).send(voiture) 
}


//get all voitures
const getVoiture=async(req,res)=>{
   let voitures=await Voiture.findAll({include:[{model:db.marque_Voiture , attribute:"libelle"} ,{model:db.modele_Voiture , attribute:"libelle"}]}) 
   
   res.status(200).send(voitures)
}

//get voiture by id

const getOneVoiture=async(req,res)=>{
    let id=req.params.id 
    let voitures=await Voiture.findOne({where: {id:id}})
    if(voitures)
    res.status(200).send(voitures)

}

//delete voiture

const deleteVoiture=async(req,res)=>{
    let id= req.params.id
    await Voiture.destroy({where :{id:id}})
    res.status(200).send()
}

//update voitures
const updateVoiture =async(req,res)=>{
    let id= req.params.id
    const voiture=await Voiture.update(req.body ,{where :{id:id}})
    res.status(200).send(voiture)
}

module.exports={addVoiture,getVoiture,getOneVoiture,updateVoiture,deleteVoiture}