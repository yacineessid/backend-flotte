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
        idMatricule:{
            type:DataTypes.INTEGER
        },
        idFournisseur:{
            type:DataTypes.INTEGER
        },
        dateReparation:{
            type:DataTypes.STRING
        },

        montant:{
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

   reparation.associate=function(){
    this.belongsTo(sequelize.models.voiture,{
        foreignKey:'idMatricule'
    });
    this.belongsTo(sequelize.models.fournisseur,{
        foreignKey:'idFournisseur'
    })
}

    return reparation
}