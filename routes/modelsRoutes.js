const  modeleVehiculeController=require('../controllers/modeleVehiculeController')

const router= require('express').Router()


router.post('/modele' , modeleVehiculeController.addModele)
router.get('/modele', modeleVehiculeController.getModeles)


module.exports=router