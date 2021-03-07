//jshint esversion:6

const http = require('express');
// debugger;

var routes = {
    '/':function index(request, response){
        response.writeHead(200);
        response.end('Hello, World!');
    },
    '/foo':function index(request, response){
        response.writeHead(200);
        response.end('You are now viewing "foo"');
    }
};

http.createServer((request, response) => {
    
    if(request.url in routes){
        return routes[request.url](request, response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(process.env.PORT||3000,() => {
        console.log('Server running at:'+ 1337);
    });