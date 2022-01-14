const dbConfig=require('../config/dbConfig')

const {Sequelize ,DataTypes}=require('sequelize')

const sequelize =new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases:false,
        
        pol:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }

)

sequelize.authenticate()
.then(()=>{
    console.log('connected..');
})
.catch(err=>{
console.log('Error' +err);
})

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize


db.users=require('./user.js')(sequelize , DataTypes)
db.conducteur=require('./conducteur.js')(sequelize , DataTypes)
db.voiture=require('./voiture.js')(sequelize , DataTypes)
db.entretien=require('./entretien.js')(sequelize , DataTypes)
db.fournisseur=require('./fournisseur')(sequelize , DataTypes)
db.réparation=require('./réparation')(sequelize , DataTypes)
db.transport=require('./transport')(sequelize , DataTypes)

db.sequelize.sync({force:true,logging:true})
.then(()=>{
    console.log('yes re-sync done');
})

module.exports=db