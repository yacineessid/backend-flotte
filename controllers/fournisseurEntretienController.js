const db=require('../models')
const FournisseurEnt=db.fournisseurEntetien

const addNewFournisseur=async(req,res)=>{
    let newFournisseur={
        id:req.body.id,
        libelle:req.body.libelle
    }
    const fournisseur= await FournisseurEnt.create(newFournisseur)
  
    res.status(200).send(fournisseur)
}
module.exports={addNewFournisseur}