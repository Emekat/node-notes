//jshint esversion:6

const express = require('express');
var cors = require('cors');
const app = express();

const PORT =  process.env.PORT || 8080;


//Creates a Root Route
app.get('/',function(req, res){
    res.send(
            JSON.stringify
            (
              {
               string_value: 'StackOverflow',
               number_value: 8476
              }
            )  
            );
        });
        // app.get('/',function(req, res){
        //     res.status(200).json(
        //               {
        //                string_value: 'StackOverflow',
        //                number_value: 8476
        //               }
        //             );
        //         });

app.listen(PORT, (err) => {
        if (!err) {
           console.log('Server is running at port', PORT);} 
        else {
            console.log(JSON.stringify(err));
             }
        });