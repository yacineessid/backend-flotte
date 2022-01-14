const voitureController=require('../controllers/voitureController')

const router= require('express').Router()

router.post('/voiture' ,voitureController.addVoiture)
router.get('/voiture',voitureController.getVoiture)
router.get('/voiture/:id',voitureController.getOneVoiture)
router.put('/voiture',voitureController.updateVoiture)
router.delete('/voiture',voitureController.deleteVoiture)

module.exports=router