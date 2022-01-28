const db = require('../models')


const Reparation= db.reparation

//create reparation

const addReparation=async(req,res)=>{
    let newReparation={
       idMatricule:req.body.idMatricule, 
       idFournisseur:req.body.idFournisseur,
       description:req.body.description,
       dateReparation:req.body.dateReparation,
       montant:req.body.montant,
 
    }
    const reparations= await Reparation.create(newReparation)
    res.status(200).send(reparations) 
}

//get reparation

const getReparation=async(req,res)=>{
    let reparations =await Reparation.findAll({include:[{model:db.fournisseur ,attribute:"nom"},{model:db.voiture,attribute:"matricule"}]})
    res.status(200).send(reparations)
}

// get  reparation by id

const getOneReparation=async(req,res)=>{
    let id =req.params.id
    let reparation= await Reparation.findOne({where :{id:id}})
    res.status(200).send(reparation)
}

//update reparation

const updateReparation=async(req,res)=>{
    let id=req.params.id
    let reparation= await Reparation.update(req.body,{where :{id:id}})
    res.status(200).send(reparation)
}

//delete reparation
const deleteReparation =async(req,res)=>{
    let id=req.params.id
    await Reparation.destroy({where:{id:id}})
    res.status(200).send()
}

module.exports={addReparation,getReparation,getOneReparation,updateReparation,deleteReparation }