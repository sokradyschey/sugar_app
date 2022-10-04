// represents the model

const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Glucose extends Model {}

Glucose.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    meal_type: {
      type: DataTypes.STRING,
    },
    glucose_level: {
      type: DataTypes.STRING,
    },
    fasting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    note: {
      type: DataTypes.CHAR(255),
    },
  },
  {
    sequelize,
    modelName: "glucose",
    timestamps: false,
  }
);

module.exports = Glucose;
