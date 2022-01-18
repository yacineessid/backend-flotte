module.exports= (sequelize,DataTypes)=>{
    const voiture =sequelize.define('voiture',{
       
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true
       },

        matricule:{
            type:DataTypes.STRING,
        
        },
        idMarque:{
            type:DataTypes.INTEGER,
            
        },
       idModele:{
            type:DataTypes.INTEGER,
      
        },
      carburant:{
            type:DataTypes.STRING,
       
        },
       aquisition:{
            type:DataTypes.STRING,
        
        },
        visite:{
            type:DataTypes.STRING,
        
        },
        assurance:{
            type:DataTypes.STRING,
            
        }
    
    },
    {
        timestamps: true,
        tableName: "voiture",
        createdAt: "creerLe",
        updatedAt: "modifierLe",
        deletedAt: "supprimerLe",
      },
   );
    voiture.associate=function(){
        this.belongsTo(sequelize.models.modeleVoiture,{
            foreignKey:"idModele",
            as:"modèle"
        })
        this.associate=function(){
            this.belongsTo(sequelize.models.marqueVoiture,{
                foreignKey:"idMarque",
                as:"marque"
            })
        }}
    return voiture
}