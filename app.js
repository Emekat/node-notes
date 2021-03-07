//jshint esversion:6

const express = require('express');
const greetMiddleware = require('./greet.js');
const app = express();

app.use('/api/v1/', greetMiddleware({ greeting: 'Hello world'})).listen(8080);

