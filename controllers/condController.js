const db=require('../models')


// create main Model
const Conducteur= db.conducteur

// 1 create conducteur

const addConducteur=async(req,res)=>{
    let newCond={
    nom:req.body.nom,
    prenom:req.body.prenom,
    email:req.body.email,
    telephone:req.body.telephone,
    dateEntree:req.body.dateEntree,
    dateSortie:req.body.dateSortie,
}
    const conducteur= await Conducteur.create(newCond)
    res.status(200).send(conducteur) 
    console.log(newCond);
}


//get all conducteurs
const getConducteur=async(req,res)=>{
   let conducteurs=await Conducteur.findAll({}) 
   res.status(200).send(conducteurs)
}

//get conducteur by id

const getOneConducteur=async(req,res)=>{
    let id=req.params.id 
    let conducteurs=await Conducteur.findOne({where: {id:id}})
    if(conducteurs)
    res.status(200).send(conducteurs)

}

//delete conducteur

const deleteConducteur=async(req,res)=>{
    let id= req.params.id
    await Conducteur.destroy({where:{id:id}})
    res.status(200).send()
   
}

//update conducteurs

const updateConducteur =async(req,res)=>{
    let id= req.params.id
    const conducteur=await Conducteur.update(req.body ,{where :{id:id}})
    res.status(200).send(conducteur)
}

module.exports={addConducteur,getOneConducteur,getConducteur,updateConducteur,deleteConducteur}