const fournisController=require('../controllers/fournisController')

const router= require('express').Router()

router.post('/fournisseur' ,fournisController.addFournisseur)
router.get('/fournisseur',fournisController.getFournisseur)
router.get('/fournisseur/:id',fournisController.getOneFournisseur)
router.put('/fournisseur/:id',fournisController.updateFournisseur)
router.delete('/fournisseur/:id',fournisController.deleteFournisseur)

module.exports=router