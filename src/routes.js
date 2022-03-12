const express = require('express');
const routes = express.Router();
const UserController = require('./Controller/UserController');

// Create a new user
routes.post('/apiv2/user', UserController.createUser);
routes.get('/apiv2/user', UserController.listAllUsers);

module.exports = routes;