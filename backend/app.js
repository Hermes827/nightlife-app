var express = require('express');
var app = express();
var db = require('./db');
require('dotenv').config()

var UserController = require('./user/userController');
app.use('/users', UserController);

var AuthController = require('./auth/authController');
app.use('/api/auth', AuthController);

module.exports = app;
