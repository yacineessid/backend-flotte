module.exports= (sequelize,DataTypes)=>{


    const modeleVoiture =sequelize.define('modele_Voiture',{
       
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
        tableName: "modele",
        createdAt: "creerLe",
        updatedAt: "modifierLe",
        deletedAt: "supprimerLe",
      },
   );
    return modeleVoiture
}