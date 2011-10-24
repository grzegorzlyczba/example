var http = require('http');


var server = http.createServer(function(req, res){
   res.end("hello world"); 
}).listen(process.env.C9_PORT);
