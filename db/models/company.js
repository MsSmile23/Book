'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Favourite }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Favourite, { foreignKey: 'company_id' });
    }
  }
  Company.init({
    name: DataTypes.STRING,
    telephone: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};