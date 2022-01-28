const db=require('../models')


// create main Model
const Transport= db.transport

// 1 create transport

const addTransport=async(req,res)=>{
    let newTransport={
    idConducteur:req.body.idConducteur,
    idMatricule:req.body.idMatricule,
    adresse:req.body.adresse,
    date:req.body.date
    }
    const transport= await Transport.create(newTransport)
    res.status(200).send(transport) 
}




//get all transports
const getTransport=async(req,res)=>{
   let transports=await Transport.findAll({include:[{model:db.conducteur,attribute:"nom"},{model:db.voiture,attribute:"matricule"}]}) 
   res.status(200).send(transports)
}

//get transport by id

const getOneTransport=async(req,res)=>{
    let id=req.params.id 
    let transport=await Transport.findOne({where: {id:id}})
    res.status(200).send(transport)

}

//delete transport

const deleteTransport=async(req,res)=>{
    let id= req.params.id
    await Transport.destroy({where :{id:id}})
    res.status(200).send()
}

//update transports

const updateTransport=async(req,res)=>{
    let id= req.params.id
    const transport=await Transport.update(req.body ,{where :{id:id}})
    res.status(200).send(transport)
}

module.exports={addTransport,getOneTransport,getTransport,updateTransport,deleteTransport}