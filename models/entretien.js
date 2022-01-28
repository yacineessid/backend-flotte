

module.exports= (sequelize,DataTypes)=>{;
    const entretien =sequelize.define('entretien',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
            
        },
        idMatricule:{
            type:DataTypes.INTEGER
        },
       idType:{
            type:DataTypes.INTEGER,
           
        },
        description:{
         type:DataTypes.STRING
        },
        idFournisseur:{
            type:DataTypes.INTEGER,
            
        },
        date:{
            type:DataTypes.STRING,
            allowNull:false
        
        },
        montant:{
            type:DataTypes.STRING,
            allowNull:false
        }
       
    },  
    {
        timestamps: true,
        tableName: "entretiens",
        createdAt: "creerLe",
        updatedAt: "modifierLe",
        deletedAt: "supprimerLe",
      },
   
);
    
    entretien.associate=function(){
    this.belongsTo(sequelize.models.typeEntretien,{
        foreignKey:'idType',
       
    });
    this.belongsTo(sequelize.models.fournisseur,{
        foreignKey:'idFournisseur',

    });
    this.belongsTo(sequelize.models.voiture,{
        foreignKey:'idMatricule'
    })
  
}
    


        return entretien

}