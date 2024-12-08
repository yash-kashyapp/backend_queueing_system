const express = require('express');
const userSignup = require('../bussiness-controllers/userSignup');
const app = express.Router();

app.post('/signup', userSignup);

module.exports = app