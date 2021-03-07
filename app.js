//jshint esversion:6

const express = require('express');
const app = express();

const PORT =  3000;

app.set('view engine', 'pug');
app.set('views', 'src/views');

//Creates a Root Route
app.get('/',function(req, res){
    res.render('index', {name: "Emeka's"}); //renders the index.jade file into html and returns as a response. The
    //render function also optionally takes the data to pass to the view.
    });
app.listen(PORT, (err) => {
        if (!err) {
           console.log('Server is running at port', PORT);} 
        else {
            console.log(JSON.stringify(err));
             }
        });