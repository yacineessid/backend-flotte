const reparaController=require('../controllers/reparaController')

const router= require('express').Router()

router.post('/reparation' ,reparaController.addReparation)
router.get('/reparation',reparaController.getReparation)
router.get('/reparation/:id',reparaController.getOneReparation)
router.put('/reparation/:id',reparaController.updateReparation)
router.delete('/reparation/:id',reparaController.deleteReparation)

module.exports=router