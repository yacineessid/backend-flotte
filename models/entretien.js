

module.exports= (sequelize,DataTypes)=>{;
    const entretien =sequelize.define('entretien',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
       idType:{
            type:DataTypes.INTEGER,
           
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
        as:'type'
    });
    this.belongsTo(sequelize.models.fournisseur,{
        foreignKey:'idFournisseur',
        as :'fournisseur'
    })}
    


        return entretien

}