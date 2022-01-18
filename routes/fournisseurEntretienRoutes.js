const fournisseurEntretienController=require('../controllers/fournisseurEntretienController')

const router= require('express').Router()


router.post('/fournisseurEnt', fournisseurEntretienController.addNewFournisseur)


module.exports=router