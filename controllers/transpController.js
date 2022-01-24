const db=require('../models')


// create main Model
const Transport= db.transport

// 1 create transport

const addTransport=async(req,res)=>{
    let newTransport={
    id:req.body.id,
    idConducteur:req.body.idConducteur,
    matricule:req.body.matricule,
    adresse:req.body.adresse,
    }
    const transport= await Transport.create(newTransport)
    res.status(200).send(transport) 
}


//get all transports
const getTransport=async(req,res)=>{
   let transports=await Transport.findAll({}) 
   res.status(200).send(transports)
}

//get transport by id

const getOneTransport=async(req,res)=>{
    let id=req.params.id 
    let transport=await Transport.findOne({where: {id:id}})
    if(users)
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