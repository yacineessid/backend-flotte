module.exports= (sequelize,DataTypes)=>{


    const modeleVoiture =sequelize.define('modeleVoiture',{
       
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
        timestamps: true,
        tableName: "modeleVoiture",
        createdAt: "creerLe",
        updatedAt: "modifierLe",
        deletedAt: "supprimerLe",
      },
   );
    return modeleVoiture
}