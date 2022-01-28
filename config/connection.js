const Sequelize=require('sequelize')


const sequelize =new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
     {
      dialect:"mysql",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      operatorAliases:false,
        logging:false,
        options: {
            requestTimeout: 60000,
          },
        
        pol:{
          idle: 30000,
          min: 1,
          // max: parseInt(process.env.DATABASE_MAX_POOL),
          acquire: 60000,
        }
    }

)

sequelize
  .sync({})
  .then(() => {
    console.log("Connection with dataBase " + process.env.DATABASE_NAME + " has been established!")
  })
  .catch((err) => {
    console.log(err)
  })

module.exports = sequelize