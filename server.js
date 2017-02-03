var express = require('express'),
	path = require('path'),
	app = express(),
	port = 8080;

app.use(express.static(path.join(__dirname)));

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
