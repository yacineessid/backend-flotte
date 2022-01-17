const db = require('../models')


const  Entretien= db.entretien

//create entretien

const addEntretien=async(req,res)=>{
    let newEntretien={
       id:req.body.id,
       idType:req.body.idType,
       idFournisseur:req.body.idFournisseur,
       date:req.body.date,
       montant:req.body.montant 
    }
    const entretien= await Entretien.create(newEntretien)
    res.status(200).send(entretien) 
}

//get entretien

const getEntretien=async(req,res)=>{
    let entretiens =await Entretien.findAll({})
    res.status(200).send(entretiens)
}

// get  entretien by id

const getOneEntretien=async(req,res)=>{
    let id =req.params.id
    let entretien= await Entretien.findOne({where :{id:id}})
    res.status(200).send(entretien)
}

//update entretiens

const updateEntretien=async(req,res)=>{
    let id=req.params.id
    let entretien= await Entretien.update(req.body,{where :{id:id}},
        )
    res.status(200).send(entretien ,)
}

//delete entretien
const deleteEntretien =async(req,res)=>{
    let id=req.params.id
    await Entretien.destroy({where:{id:id}})
    res.status(200).send('data is  destroyed')
}

module.exports={ addEntretien ,getEntretien,getOneEntretien,updateEntretien,deleteEntretien}