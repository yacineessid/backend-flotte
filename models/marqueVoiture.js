module.exports= (sequelize,DataTypes)=>{
    const marqueVoiture =sequelize.define('marque_voiture',{
       
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true},
          
     
           libelle:{
               type:DataTypes.STRING
           }
  
    },
    
    {
        timestamps: true,
        tableName: "marqueVoiture",
        createdAt: "creerLe",
        updatedAt: "modifierLe",
        deletedAt: "supprimerLe",
      },
   );
    return marqueVoiture
}