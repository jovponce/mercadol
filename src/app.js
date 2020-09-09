'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Load routes
const api_routes = require('./routes/api');

// Middlewares
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes Modules
app.use('/', api_routes);

//Routes Error
// 404
app.use(function(req, res, next) {
    return res.status(404).send('<h1>404</h1><h3>Page Not Found!</h3>');
});
  
// 500 - Any server error
app.use(function(err, req, res, next) {
    return res.status(500).send('<h1>500</h1><h3>'+err+'</h3>');
});

//
module.exports = app;