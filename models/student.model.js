//models for student using sequelize
module.exports = sequelize.define('student',{
	id : {type : sequelize.INTEGER, autoIncrement : true, primaryKey : true},
	email : { type : sequelize.STRING , allowNull : false},
	name : { type : sequelize.STRING },
	year : { type : sequelize.INTEGER,},
	contactNo : { type : sequelize.STRING(10), allowNull : false },
	admissionNo : { type : sequelize.STRING(9)}
});