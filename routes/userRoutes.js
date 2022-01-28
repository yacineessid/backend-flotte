
const userController=require('../controllers/userController')
const router=require('express').Router()



router.post('/user' ,userController.addUser)
router.get('/user',userController.getUser)
router.get('/user/:id',userController.getOneUser)
router.post('/user/login',userController.logUser)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id', userController.updateUser)

module.exports= router;
