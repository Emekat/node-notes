//jshint esversion:6

const http = require('http');
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
}

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type':'text/plain'
    });
  
    response.write('Hello, World!\n');

    response.end();
}).listen(1337,() => {
        console.log('Server running at:'+ 1337);
    });