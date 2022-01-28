const typesEntretienController=require('../controllers/typesEntretienController')

const router= require('express').Router()


router.post('/typeEnt' , typesEntretienController.addType)
router.get('/typeEnt' , typesEntretienController.getTypes)

module.exports=router