'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Product.hasMany(models.Cart, { foreignKey: "productID" })
    }
  };
  Product.init({
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productTypeID: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    productImage: DataTypes.STRING,
    productPrice: DataTypes.FLOAT,
    productCount: DataTypes.INTEGER,
    productInfo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'product'
  });
  return Product;
};