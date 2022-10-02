const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Glucose extends Model {}

Glucose.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "sugar",
      timestamps: false,
    }
  );
  
  module.exports = Glucose;