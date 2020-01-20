var {ExpressCassandra,models} = require('../dbconnect');


var Person = models.loadSchema('Person', {
    fields:{
        name    : "text",
        surname : "text",
        age     : "int",
        created : "timestamp"
    },
    key:["name"]
});


Person.syncDB(function(err, result) {
    if (err) throw err;    
});

module.exports = Person;

