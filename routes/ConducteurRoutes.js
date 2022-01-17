const  condController=require('../controllers/condController')

const router=require('express').Router()

router.post('/conducteur' ,condController.addConducteur)
router.get('/conducteur',condController.getConducteur)
router.get('/conducteur/:id',condController.getOneConducteur)
router.delete('/conducteur/:id',condController.deleteConducteur)
router.put('/conducteur/:id',condController.updateConducteur )

module.exports= router;
