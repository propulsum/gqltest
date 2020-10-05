import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class nosecone extends Model {
    static associate() {
    }
  }
  nosecone.init({
    partName: DataTypes.STRING,
    radius: DataTypes.DOUBLE,
    length: DataTypes.DOUBLE,
    wall_thickness: DataTypes.DOUBLE,
    shape: DataTypes.ENUM('conical', 'ogive'),
  }, {
    sequelize,
    modelName: 'nosecone',
  });
  return nosecone;
};
