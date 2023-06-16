'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dailyReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dailyReport.init({

    reportID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    revenue: DataTypes.FLOAT,
    billCount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'dailyReport',
  });
  return dailyReport;
};