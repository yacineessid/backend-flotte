const Sequelize = require("sequelize")
const fs = require("fs")
const path = require("path")
const sequelize = require("../config/connection")
const basename = path.basename(__filename)

var db = {
  
}
fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  })
  .forEach(async (file) => {
    console.log(file);
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})


db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db