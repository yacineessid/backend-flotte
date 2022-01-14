const db = require('../models')


const Réparation= db.réparation

//create réparation

const addRéparation=async(req,res)=>{
    let newRéparation={
       id:req.body.id,
       matricule:req.body.matricule,
       Idfournisseur:req.body.Idfournisseur,
       dateRéparation:req.body.dateRéparation,
       adresse:req.body.adresse, 
    }
    const réparation= await Fournisseur.create(newRéparation)
    res.status(200).send(réparation) 
}

//get réparation

const getRéparation=async(req,res)=>{
    let réparations =await Fournisseur.findAll({})
    res.status(200).send(réparations)
}

// get  réparation by id

const getOneRéparation=async(req,res)=>{
    let id =req.params.id
    let réparation= await Réparation.findOne({where :{id:id}})
    res.status(200).send(réparation)
}

//update réparation

const updateRéparation=async(req,res)=>{
    let id=req.params.id
    let réparation= await Réparation.update(req.body,{where :{id:id}})
    res.status(200).send(réparation)
}

//delete réparation
const deleteRéparation =async(req,res)=>{
    let id=req.params.id
    await Réparation.destroy({where:{id:id}})
}

module.exports={addRéparation,getRéparation,getOneRéparation,updateRéparation,deleteRéparation }