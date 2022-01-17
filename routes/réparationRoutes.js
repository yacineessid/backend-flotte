const réparaController=require('../controllers/réparaController')

const router= require('express').Router()

router.post('/réparation' ,réparaController.addRéparation)
router.get('/réparation',réparaController.getRéparation)
router.get('/réparation/:id',réparaController.getOneRéparation)
router.put('/réparation/:id',réparaController.updateRéparation)
router.delete('/réparation/:id',réparaController.deleteRéparation)

module.exports=router