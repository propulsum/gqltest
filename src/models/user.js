import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate() {

    }
  }
  user.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
