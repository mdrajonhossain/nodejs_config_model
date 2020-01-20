var {Person,ExpressCassandra,models} = require('../models/Person'); 


class AuthController{


 
	liste(req, res) {
		// var john = new models.instance.Person({name: 'aaa', surname: 'Doe', created:1579517216, age: 332});		 
		// john.save()


		models.instance.Person.find({},function(err, people){     
			// console.log(people)
			return res.render('view', { people: people});
		});		
		 
  	}
 









}

module.exports = AuthController;