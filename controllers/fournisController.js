const db = require('../models')


const Fournisseur= db.fournisseur

//create fournisseur

const addFournisseur=async(req,res)=>{
    let newFournisseur={
       id:req.body.idType,
       société:req.body.société,
       adresse:req.body.adresse,
       téléphone:req.body.téléphone 
    }
    const fournisseur= await Fournisseur.create(newFournisseur)
    res.status(200).send(fournisseur) 
}

//get fournisseur

const getFournisseur=async(req,res)=>{
    let fournisseurs =await Fournisseur.findAll({})
    res.status(200).send(fournisseurs)
}

// get  fournisseur by id

const getOneFournisseur=async(req,res)=>{
    let id =req.params.id
    let fournisseur= await Fournisseur.findOne({where :{id:id}})
    res.status(200).send(fournisseur)
}

//update fournisseur

const updateFournisseur=async(req,res)=>{
    let id=req.params.id
    let fournisseur= await Fournisseur.update(req.body,{where :{id:id}})
    res.status(200).send(fournisseur)
}

//delete fournisseur
const deleteFournisseur =async(req,res)=>{
    let id=req.params.id
    await Fournisseur.destroy({where:{id:id}})
}

module.exports={addFournisseur,getOneFournisseur,getFournisseur,updateFournisseur,deleteFournisseur }