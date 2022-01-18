const  db=require('../models')


const Type = db.typeEntretien

const addType=async(req,res)=>{
    let newType={

        libelle:req.body.libelle,
    }
  const type=await Type.create(newType)
  res.status(200).send(type)
}

module.exports ={addType}