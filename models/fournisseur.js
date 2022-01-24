module.exports=(sequelize,DataTypes)=>{
    
    const fournisseur = sequelize.define('fournisseur',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nom:{
            type:DataTypes.STRING
        }, 
     
        adresse:{
            type:DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING,
        },
        telephone:{
            type:DataTypes.STRING
        }
    },
    {
        timestamps: true,
        tableName: "fournisseur",
        createdAt: "creerLe",
        updatedAt: "modifierLe",
        deletedAt: "supprimerLe",
      },
    );
     
   
 
    return fournisseur
}
