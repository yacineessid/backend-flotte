

module.exports= (sequelize,DataTypes)=>{
    const users =sequelize.define('users',{
       
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true
         
       },
        username:{
            type:DataTypes.STRING,
         
        },
        
       password:{
            type:DataTypes.STRING,
            
        }
    });
    return users
}