const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
<<<<<<< HEAD
  {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
=======
    {
>>>>>>> 34012f9aca802c0cbcf01bc65684f0e3a7dc475a
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
<<<<<<< HEAD
=======
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
>>>>>>> 34012f9aca802c0cbcf01bc65684f0e3a7dc475a
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
<<<<<<< HEAD
    blogPost_id: {
      type: DataTypes.INTEGER, // Change data type to INTEGER
=======
   blogpost_id: {
      type: DataTypes.INTEGER,
>>>>>>> 34012f9aca802c0cbcf01bc65684f0e3a7dc475a
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
