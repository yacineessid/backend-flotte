const db = require('../models')


const Reparation= db.reparation

//create reparation

const addReparation=async(req,res)=>{
    let newReparation={
       id:req.body.id,
       description:req.body.description,
       matricule:req.body.matricule,
       Idfournisseur:req.body.Idfournisseur,
       dateReparation:req.body.dateReparation,
       adresse:req.body.adresse, 
    }
    const reparation= await Fournisseur.create(newReparation)
    res.status(200).send(reparation) 
}

//get reparation

const getReparation=async(req,res)=>{
    let reparations =await Fournisseur.findAll({})
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
    res.status(200).send('data is  destroyed')
}

module.exports={addReparation,getReparation,getOneReparation,updateReparation,deleteReparation }