const express = require('express');
const routes = express.Router();
const UserController = require('./Controller/UserController');

// Create a new user
routes.post('/user', UserController.createUser);

module.exports = routes;