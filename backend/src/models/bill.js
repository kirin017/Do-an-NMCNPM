'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bill.init({
    billID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id: DataTypes.INTEGER,
    customerName: DataTypes.STRING,
    customerPhoneNumber: DataTypes.STRING,
    customerAddress: DataTypes.STRING,
    date: DataTypes.DATE,
    paymentType: DataTypes.INTEGER,
    shipCost: DataTypes.FLOAT,
    promoID: DataTypes.INTEGER,
    totalCost: DataTypes.FLOAT,
    note: DataTypes.STRING,
    statusID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Bill',
    tableName: 'bill'
  });
  return Bill;
};