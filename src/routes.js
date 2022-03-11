const express = require('express');
const { append } = require('express/lib/response');
const routes = express.Router();
const UserController = require('./Controller/UserController');

// Create a new user
routes.post('/user', UserController.createUser);

module.exports = routes;