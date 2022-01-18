const typesEntretienController=require('../controllers/typesEntretienController')

const router= require('express').Router()


router.post('/typeEnt' , typesEntretienController.addType)

module.exports=router