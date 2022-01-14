
const entretController=require('../controllers/entretController')
const router =require('express').Router()

router.post('/entretien' , entretController.addEntretien)
router.get('/entretien',entretController.getEntretien)
router.get('/entretien/:id', entretController.getOneEntretien)
router.put('/entretien', entretController.updateEntretien)
router.delete('/entretien', entretController.deleteEntretien)


module.exports=router