

const db=require('../models')

const Carburant=db.carburant


addCarburant=async(req,res)=>{
   
    let newCarburant={
      
        idConducteur:req.body.idConducteur,
        idMatricule:req.body.idMatricule,
        idFournisseur:req.body.idFournisseur,
        date:req.body.date,
        coutLitre:req.body.coutLitre,
        coutTotal:req.body.coutTotal,
        quantiteLitre:req.body.quantiteLitre,

    }

    const carburant =await Carburant.create(newCarburant)

    res.status(200).send(carburant)
}



getCarburant=async(req,res)=>{
    const carburant=await Carburant.findAll({include:[{model:db.conducteur , attribute:"nom"},{model:db.voiture,attribute:"matricule"},{model:db.fournisseur , attribute:"nom"}]})
    res.status(200).send(carburant)
}



deleteCarburant=async(req,res)=>{
    let id=req.params.id
    await Carburant.destroy({where:{id:id}})
    res.status(200).send()
}


module.exports={getCarburant,addCarburant,deleteCarburant}