const dbConfig=require('../config/dbConfig')

const {Sequelize ,DataTypes}=require('sequelize')

const sequelize =new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases:false,
        options: {
            requestTimeout: 60000,
          },
        
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
db.typeEntretien=require('./typeEntretien')(sequelize , DataTypes)
db.marqueVoiture=require('./marqueVoiture')(sequelize , DataTypes)


// Object.keys(db).forEach((modelName) => {
//     console.log(db);
//     if (db[modelName].associate) {
//       db[modelName].associate(db);
//     }
//   });


db.sequelize.sync({force :true})
.then(()=>{
    console.log('yes re-sync done');
})

module.exports=db