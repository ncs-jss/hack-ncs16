
var express	=	require("express");
var app		=	express();
var Sequelize	= require("sequelize");

var sequelize = new Sequelize('ncsdb','root','root',
{
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 100,
		min: 0,
		idle: 1000
	},
});


sequelize
.authenticate()
.then(function(err){
	console.log("connection established");
})
.catch(function(err){
	console.log("Unable to connect to database" +err);
});

sequelize.sync();

var Student	=	sequelize.import('./models/student.model.js');
var Event 	= sequelize.import('./models/event.model.js');

app.get('/',function(req,res){
	var email = req.query.email;
	var contactNo = req.query.number

	Student
   .findOrCreate({where: {'email': email}, defaults: {'contactNo': contactNo}})
   .spread(function(student, created) {
   	console.log(student);
    console.log(student.get({
      plain: true
    }))
    console.log(created);
	})

	res.send("welcome home!");

});

app.listen(3000,function(){
	console.log("we are listening at port 3000\n type  http://localhost:3000/ in chrome");
});
