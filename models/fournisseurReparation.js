module.exports=(sequelize,DataTypes)=>{
    
    const fournisseurReparation = sequelize.define('fournisseur_reparation',{
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
        tableName: "fournisseur-reparation",
        createdAt: "creerLe",
        updatedAt: "modifierLe",
        deletedAt: "supprimerLe",
      },)
    return fournisseurReparation
}