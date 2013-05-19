/**
 * BCASS server, using express (and connect).
 */

console.log("Running BCASS app.js at " + __dirname);

var express = require('express'),
	http = require('http'),
	path = require('path'),
	engines = require('consolidate'),
	app = express();

// Configure express server
app.configure(function () {

	app.set('port', process.env.PORT || 3000);

	// Configure QEJS as the view templating.
	app.engine('html', engines.qejs);
	app.set('view engine', 'qejs');
	app.set('views', __dirname + '/views');

	// Hook router up to middleware
	app.use(app.router);

	// Serve requests for assets from public sub-folder of project.
	app.use('/', express.static(path.join(__dirname, 'public')));
});

// Nice errors during development
app.configure('development', function(){
	app.use(express.errorHandler());
});

// Tell Express it's running from behind a proxy
app.enable('trust proxy');

// Routes
// TODO Dynamic route binding would be nice.
var routes = require('./routes');
app.get('/', routes.index);

// Bind to port 3000
http.createServer(app).listen(app.get('port'), function(){
	"use strict";
	console.log("sourcedweb server listening on port " + app.get('port'));
});