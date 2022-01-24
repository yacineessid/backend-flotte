const marqueVoitureController =require('../controllers/marqueVoitureController')

const router= require('express').Router()

router.post('/marque' , marqueVoitureController.addMarque)
router.get('/marque',marqueVoitureController.getMarque)


module.exports=router