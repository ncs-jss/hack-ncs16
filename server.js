var express	=	require("express");
var app		=	express();
var Sequelize	= require("sequelize");


app.get('/',function(req,res){
	res.send("welcome home!");
	var sequelize = new Sequelize('ncsdb','root','root',
	{
		host: 'localhost',
		dialect: 'mysql',
		pool: {
			max: 100,
			min: 0,
			idle: 1000
		}
	});

	sequelize
	.authenticate()
	.then(function(err){
		console.log("connection established");
	})
	.catch(function(err){
		console.log("Unable to connect to database" +err);
	})

});

app.listen(3000,function(){
	console.log("we are listening at port 3000\n type  http://localhost:3000/ in chrome");
})
