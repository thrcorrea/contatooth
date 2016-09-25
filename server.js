var http = require('http');
var app = require('./config/express')();
var config = require('./config/config')();
require('./config/passport.js')();
require('./config/database.js')(config.db);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server Escutando na porta ' + app.get('port'));
});
