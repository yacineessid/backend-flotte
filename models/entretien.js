module.exports= (sequelize,DataTypes)=>{
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
       
    });
    entretien.associate=function(){
        this.belongsTo(sequelize.models.entretien,{
            foreignKey:"idType",
            as:"type"
        })
        this.associate=function(){
            this.belongsTo(sequelize.models.entretien,{
                foreignKey:"idFournisseur",
                as:"fournisseur"
            })
       
    }}
    return entretien
}