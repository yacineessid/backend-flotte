
const  db=require('../models')

const Modele=db.modele_Voiture


const addModele=async(req,res)=>{
    let newModele={
     
        libelle:req.body.libelle

    }

    const modele = await Modele.create(newModele)
    res.status(200).send(modele)
}


const getModeles =async(req,res)=>{
    
    const modeles = await Modele.findAll({})
    res.status(200).send(modeles)

}

module.exports={addModele ,getModeles}