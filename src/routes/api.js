'use strict'

const express = require('express');
var ApiController = require('../controllers/api');

const api = express.Router();

// Login user
api.post('/buscar', ApiController.buscarApp);


module.exports = api;