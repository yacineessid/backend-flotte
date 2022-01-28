module.exports= (sequelize,DataTypes)=>{
const carburant =sequelize.define('carburant',{
id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},

idConducteur:{
    type:DataTypes.INTEGER
},

idMatricule:{
    type:DataTypes.INTEGER
},
idFournisseur:{
    type:DataTypes.INTEGER
},
date:{
    type:DataTypes.STRING
},
coutLitre:{
    type:DataTypes.STRING
},
coutTotal:{
    type:DataTypes.STRING
},
quantiteLitre:{
    type:DataTypes.STRING
},

},
{
    timestamps: true,
    tableName: "carburant",
    createdAt: "creerLe",
    updatedAt: "modifierLe",
    deletedAt: "supprimerLe",
  }
);

carburant.associate=function(){
    this.belongsTo(sequelize.models.voiture,{
        foreignKey:'idMatricule'
    });
    this.belongsTo(sequelize.models.fournisseur,{
        foreignKey:'idFournisseur'
    });
    this.belongsTo(sequelize.models.conducteur,{
        foreignKey:'idConducteur'
    })

}

return carburant

}