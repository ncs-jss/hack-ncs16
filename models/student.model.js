//models for student using sequelize
module.exports = function  (sequelize, DataTypes) {
	return  sequelize.define('Student',{
			id : {type : sequelize.INTEGER, autoIncrement : true, primaryKey : true},
			email : { type : sequelize.STRING , allowNull : false},
			name : { type : sequelize.STRING },
			year : { type : sequelize.INTEGER,},
			contactNo : { type : sequelize.STRING,allowNull : false},
			admissionNo : { type : sequelize.STRING}
	});
}
// }
// {

//   // don't forget to enable timestamps!
//   timestamps: true,
//   // I want updatedAt to actually be called updateTimestamp
//   updatedAt: 'updateTimestamp',
//   createdAt: ''
