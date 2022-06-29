// required library
const mongoose = require('mongoose');

// database connection made
mongoose.connect("mongodb+srv://jswdb:jswdb@cluster0.loco6.mongodb.net/getout");

const db = mongoose.connection;

// checking for database connection
db.on('error',console.error.bind(console,'error!!'));

db.once('open',function(){
    console.log('Successfully connected to database :: MongoDB');
});