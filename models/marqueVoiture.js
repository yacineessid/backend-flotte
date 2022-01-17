module.exports= (sequelize,DataTypes)=>{
    const marqueVoiture =sequelize.define('marque_voiture',{
       
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true},
          
     
           libelle:{
               type:DataTypes.STRING
           }
  
    });
    return marqueVoiture
}