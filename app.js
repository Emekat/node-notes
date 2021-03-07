//jshint esversion:6

const express = require('express');
const greetMiddleware = require('./greet.js');


class GreetingService {
    constructor(greeting = 'Hello') {
    this.greeting = greeting;
    }
       createGreeting(name) {
       return `${this.greeting}, ${name}!`;
    }
}

const app = express();

app
  .use('/api/v1/service1', greetMiddleware({ 
    service: new GreetingService('Hello')}))
  .use('/api/v1/service2', greetMiddleware({ 
        service: new GreetingService('Hi')}))
    .listen(8080);

