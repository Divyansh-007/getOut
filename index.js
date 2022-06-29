// required libarary
const express = require('express');

// port address
const port = process.env.PORT || 8000;

// initializing the app
const app = express();

// db connection
const db  = require('./config/mongoose');

// to use encoded input data
// app.use(express.urlencoded());

// use (main) express router
app.use('/',require('./routes/index'));

// checking the server
app.listen(port,(err) => {
    if(err){console.log(`Error in running the server: ${err}`);}

    console.log(`Express Server is up and running on port: ${port}`);
});