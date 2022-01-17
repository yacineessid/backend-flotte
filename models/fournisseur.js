module.exports=(sequelize,DataTypes)=>{
    
    const fournisseur = sequelize.define('fournisseur',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        société:{
            type:DataTypes.STRING
        },
        adresse:{
            type:DataTypes.STRING
        },
        téléphone:{
            type:DataTypes.STRING
        }
    })
    return fournisseur
}