module.exports= (sequelize,DataTypes)=>{
    const fournisseurEntetien=sequelize.define('fournisseurEntetien',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true

        },
        libelle:{
            type:DataTypes.STRING
        }
    })
    return fournisseurEntetien
}