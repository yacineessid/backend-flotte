module.exports=(sequelize,DataTypes)=>{
    const reparation =sequelize.define('reparation',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        description:{
            type:DataTypes.STRING
        },
        matricule:{
            type:DataTypes.STRING
        },
        idFournisseur:{
            type:DataTypes.INTEGER
        },
        dateReparation:{
            type:DataTypes.STRING
        },
        adresse:{
            type:DataTypes.STRING
        }
    },
    
    {
        timestamps: true,
        tableName: "reparation",
        createdAt: "creerLe",
        updatedAt: "modifierLe",
        deletedAt: "supprimerLe",
      },

   )


    return reparation
}