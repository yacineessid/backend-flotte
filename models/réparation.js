module.exports=(sequelize,DataTypes)=>{
    const réparation =sequelize.define('réparation',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        matricule:{
            type:DataTypes.STRING
        },
        idFournisseur:{
            type:DataTypes.INTEGER
        },
        dateRéparation:{
            type:DataTypes.STRING
        },
        adresse:{
            type:DataTypes.STRING
        }
    })
    réparation.associate=function(){
        this.belongsTo(sequelize.models.réparation)
        foreignKey="ifFournisseur"
        as ="fournisseur"
    }
    return réparation
}