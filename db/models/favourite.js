'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Company }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Company, { foreignKey: 'company_id' });
    }
  }
  Favourite.init({
    user_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};