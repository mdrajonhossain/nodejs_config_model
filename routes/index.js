var express = require('express');
var router = express.Router();
var Person = require('../models/Person'); 

var {Person,ExpressCassandra,models} = require('../models/Person'); 




const ArticlesController = require("../controllers/AuthController");
const controller = new ArticlesController();


router.get('/', function(req, res, next) {

	models.instance.Person.find({},function(err, people){     
			// console.log(people)
			return res.render('index', { people: people});
		});	
});


router.get("/view", (req, res) => controller.liste(req, res));
router.get("/send", (req, res) => controller.liste(req, res));




module.exports = router;
