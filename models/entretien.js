module.exports= (sequelize,DataTypes)=>{
    console.log(sequelize);
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
        timestamps:true,
        tableName:"entretien",
    }
    
    );
    entretien.associate=function(){
        this.belongsTo(sequelize.models.typeEntretien,{
            foreignKey:'idType'
         
        })
        this.associate=function(){
            this.belongsTo(sequelize.models.fournisseur,{
                foreignKey:"idFournisseur",
                as:"fournisseur"
            })
       
    }}
    return entretien
}