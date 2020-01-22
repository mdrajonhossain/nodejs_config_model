var express = require('express');
var router = express.Router();
const toUUID = require('to-uuid').toUUID;
var Person = require('../models/Person'); 

var {Person,ExpressCassandra,models} = require('../models/Person'); 
var {Person,ExpressCassandra,models} = require('../models/Informdata'); 


const ArticlesController = require("../controllers/AuthController");
const controller = new ArticlesController();


router.get('/', function(req, res, next) {
	models.instance.Person.find({},function(err, people){     			 
		return res.render('index', { people: people});
	});	
});


router.post('/senddata', function(req, res) {	 
		var name = req.body.name;
		var age = parseInt(req.body.age);		 
		var surname = req.body.surname;
		var data = new models.instance.Person({name:name, age:age, surname:surname});		 
		data.save();
	res.redirect('/');
});
 
router.post('/ajax', function(req, res) {	
	var name = req.body.name;	 
	var age = parseInt(req.body.age);	 
	var surname = req.body.surname;
	var daata = new models.instance.Person({name:name, age:age, surname:surname});		 
	daata.save(); 	 
	// res.send(x);
});

router.get('/delete/:col_id', function(req, res) {	 	
	var col = models.uuidFromString(req.params.col_id);
	var query_object = {col_id:col};
	models.instance.Person.delete(query_object);
	res.redirect('/');	    	 
});
 

router.get('/edit/:col_id', function(req, res) {	 	
	var col = models.uuidFromString(req.params.col_id);
	var query_object = {col_id:col};	 
	models.instance.Person.findOne(query_object, function(err, people){     			 	
	return res.render('edit', { people: people});
	});	 
});



router.post('/updating/:col_id', function(req, res) {	 
	var name = req.body.name;
	var age = parseInt(req.body.age);
	var surname = req.body.surname;
	var col = models.uuidFromString(req.params.col_id);
 
	var id = {col_id: col};
	 
	models.instance.Person.update(id,{name,age,surname}) 	     
	res.redirect('/');
});





// models.instance.Person.find({col_id: models.uuidFromString('853d45b') }, { select: ['age'] }, function(err, people){
//     console.log(people)
// });


// models.instance.Person.find({}, { select: ['age'] }, function(err, people){
//     console.log(people)
// });


// models.instance.Person.find({},{ select: ['age']}, function(err, rr){
// 	console.log(rr)
// }); 


// var data = new models.instance.Informdata({name:"sumon", age:10, surname:"rasss"})
// data.save()
 



router.get("/view", (req, res) => controller.liste(req, res));

module.exports = router;
