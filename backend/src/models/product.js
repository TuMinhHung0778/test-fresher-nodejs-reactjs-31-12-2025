"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
    }
  }

  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.FLOAT,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER, // QUAN TRỌNG để thiết lập khóa ngoại
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};
