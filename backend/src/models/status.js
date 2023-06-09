'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Status.init({
    statusID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    statusName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Status',
    tableName: 'Status'
  });
  return Status;
};