var {ExpressCassandra,models} = require('../dbconnect');


var Informdata = models.loadSchema('Informdata', {
    fields:{
    	col_id: {
            type: "uuid",
            default: {"$db_function": "uuid()"}
        },
        name    : "text",
        surname : "text",
        age     : "int",
        created : { type:"timestamp", default: {"$db_function": "toTimestamp(now())"}}
    },
    key:["col_id"]
});



Informdata.syncDB(function(err, result) {
    if (err) throw err;    
});

module.exports = {Informdata,ExpressCassandra,models};

