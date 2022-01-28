const carburantController=require('../controllers/carburantController')

const router= require('express').Router()


router.post('/carburant' , carburantController.addCarburant)
router.get('/carburant',carburantController.getCarburant)
router.delete('/carburant/:id',carburantController.deleteCarburant)


module.exports=router