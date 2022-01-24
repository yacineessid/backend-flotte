module.exports= (sequelize,DataTypes)=>{
    const marqueVoiture =sequelize.define('marque_Voiture',{
       
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true
        },
          
           libelle:{
               type:DataTypes.STRING
           },

        idModele:{
            type:DataTypes.INTEGER
        }
    },
    
    {
        timestamps: true,
        tableName: "marque",
        createdAt: "creerLe",
        updatedAt: "modifierLe",
        deletedAt: "supprimerLe",
      },
   );
   return marqueVoiture
}




   
