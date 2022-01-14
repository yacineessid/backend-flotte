module.exports= (sequelize,DataTypes)=>{
    const conducteur =sequelize.define('conducteur',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true
        },
       nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        prénom:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
    });
    return conducteur
}