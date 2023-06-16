'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dailyReportDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dailyReportDetail.init({

    reportID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        primaryKey: true,
      },
    revenue: DataTypes.FLOAT,
    billCount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'dailyReportDetail',
  });
  return dailyReportDetail;
};