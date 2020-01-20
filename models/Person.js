var {ExpressCassandra,models} = require('../dbconnect');


var Person = models.loadSchema('Person', {
    fields:{
        name    : "text",
        surname : "text",
        age     : "int",
        created : { type:"timestamp", default: {"$db_function": "toTimestamp(now())"}}
    },
    key:["name"]
});



Person.syncDB(function(err, result) {
    if (err) throw err;    
});

module.exports = {Person,ExpressCassandra,models};

