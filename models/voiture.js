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
       idModèle:{
            type:DataTypes.INTEGER,
      
        },
      carburant:{
            type:DataTypes.STRING,
       
        },
       Aquisition:{
            type:DataTypes.STRING,
        
        },
        visite:{
            type:DataTypes.STRING,
        
        },
        assurance:{
            type:DataTypes.STRING,
            
        }
    
    });
    voiture.associate=function(){
        this.belongsTo(sequelize.models.voiture,{
            foreignKey:"idModèle",
            as:"modèle"
        })
        this.associate=function(){
            this.belongsTo(sequelize.models.voiture,{
                foreignKey:"idMarque",
                as:"marque"
            })
        }}
    return voiture
}