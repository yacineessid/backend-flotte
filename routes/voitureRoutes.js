const voitureController=require('../controllers/voitureController')

const router= require('express').Router()

router.post('/voiture' ,voitureController.addVoiture)
router.get('/voiture',voitureController.getVoiture)
router.get('/voiture/:id',voitureController.getOneVoiture)
router.put('/voiture/:id',voitureController.updateVoiture)
router.delete('/voiture/:id',voitureController.deleteVoiture)

module.exports=router