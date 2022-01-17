

module.exports= (sequelize,DataTypes)=>{
    const typeEntretien =sequelize.define('typeEntretien',{
       
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true
        },
           
         
           libelle:{
               type:DataTypes.STRING
           }
  
      },
      {
        timestamps:true,
        tableName:"typeEntretien",
    }
      );
  
      
  
    return typeEntretien
}