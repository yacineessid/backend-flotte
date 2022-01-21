module.exports = (sequelize, DataTypes) => {
  const conducteur = sequelize.define(
    "conducteur",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.STRING,
      },
      dateEntree: {
        type: DataTypes.STRING,
      },
      dateSortie: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      tableName: "conducteurs",
      createdAt: "creerLe",
      updatedAt: "modifierLe",
      deletedAt: "supprimerLe",
    }
  );
  return conducteur;
};
