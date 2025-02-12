import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class rocketpart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  rocketpart.init({
    partName: DataTypes.STRING,
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
  }, {
    sequelize,
    modelName: 'rocketpart',
  });
  return rocketpart;
};
