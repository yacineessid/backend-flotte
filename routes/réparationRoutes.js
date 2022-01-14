const réparaController=require('../controllers/réparaController')

const router= require('express').Router()

router.post('/réparation' ,réparaController.addRéparation)
router.get('/réparation',réparaController.getRéparation)
router.get('/réparation/:id',réparaController.getOneRéparation)
router.put('/réparation',réparaController.updateRéparation)
router.delete('/réparation',réparaController.deleteRéparation)

module.exports=router