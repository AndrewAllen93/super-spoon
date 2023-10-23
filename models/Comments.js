const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
    category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    id: {
       type: DataTypes.INTEGER,
       allowNull: false,
      primaryKey: true,
      autoIncrement: true,
     },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   blogPost_id: {
      type: DataTypes.STRING,
      references: {
      model: 'blogpost',
      key: 'id',
     },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;