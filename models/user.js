

module.exports= (sequelize,DataTypes)=>{
    const users =sequelize.define('users',{
       
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true
       },
        username:{
            type:DataTypes.STRING,
         
        },
        
       password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return users
}