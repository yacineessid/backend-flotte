module.exports=(sequelize,DataTypes)=>{
    const transport= sequelize.define('transport',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        idConducteur:{
            type:DataTypes.INTEGER
        },
        matricule:{
            type:DataTypes.STRING
        },
        adresse:{
            type:DataTypes.STRING
        }
    })
}