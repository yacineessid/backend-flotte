const db=require('../models')
const sequelize=require('sequelize')

// create main Model
const User= db.users

// 1 create user

const addUser=async(req,res)=>{
    let newUser={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
  
    const user= await User.create(newUser )
    res.status(200).send(user) 
}


const logUser=async(req,res)=>{
    const users= await User.findAll({where : sequelize.and ({email:req.body.email},{password:req.body.password})})
    console.log(users ,'hy');
     if (users.length) {
         res.status(200).json('welcome')
     } else {
      res.status(401).json('email or password is invalid') 
     }

}
 
//get all users
const getUser=async(req,res)=>{
   let users=await User.findAll({}) 
   res.status(200).send(users)
}

//get user by id

const getOneUser=async(req,res)=>{
    let id=req.params.id 
    let users=await User.findOne({where: {id:id}})
    if(users)
    res.status(200).send(users)

}

//delete user

const deleteUser=async(req,res)=>{
    let id= req.params.id
    await User.destroy({where :{id:id}})
    res.status(200).send()
}

//update users

const updateUser =async(req,res)=>{
    let id= req.params.id
    const user=await User.update(req.body ,{where :{id:id}})
    res.status(200).send(user)
}

module.exports={addUser , getUser , getOneUser,deleteUser,updateUser,logUser}