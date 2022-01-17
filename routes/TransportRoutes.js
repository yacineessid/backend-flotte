const transpController=require('../controllers/transpController')

const router= require('express').Router()

router.post('/transport', transpController.addTransport)
router.get('/transport',transpController.getTransport)
router.get('/transport/:id',transpController.getOneTransport)
router.put('/transport/:id',transpController.updateTransport)
router.delete('/transport/:id',transpController.deleteTransport)

module.exports=router
