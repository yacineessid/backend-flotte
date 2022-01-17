module.exports= (sequelize,DataTypes)=>{
    const modèleVoiture =sequelize.define('modèle_voiture',{
       
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true
           },
     
           libelle:{
               type:DataTypes.STRING
           }
  
    });
    return modèleVoiture
}