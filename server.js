var http = require('http');
var app = require('./config/express')();
require('./config/passport.js')();
require('./config/database.js')('mongodb://localhost/contatooth');

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server Escutando na porta ' + app.get('port'));
});
