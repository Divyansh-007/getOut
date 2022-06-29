// required library
const mongoose = require('mongoose');

// database connection made
mongoose.connect(MONGO_DB_CONNECTION_STRING_URL);

const db = mongoose.connection;

// checking for database connection
db.on('error',console.error.bind(console,'error!!'));

db.once('open',function(){
    console.log('Successfully connected to database :: MongoDB');
});