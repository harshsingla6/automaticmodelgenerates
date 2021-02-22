'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      studentCourse.belongsTo(models.student,{foreignKey : "rollNo"})
    }
  };
  studentCourse.init({
    courseName: DataTypes.STRING,
    rollNo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'studentCourse',
  });
  return studentCourse;
};