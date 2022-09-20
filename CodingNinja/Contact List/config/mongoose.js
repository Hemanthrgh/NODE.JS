// require the library
const mongoose=require("mongoose");

// Connect to the Database
mongoose.connect("mongodb://localhost:27017/ContactListDB");

// aquire the connection to check it connected or not
const db=mongoose.connection;

// Error
db.on("error",console.error.bind(console,"Error in connecting DB"));

// Up and running then print the message
db.once("open",()=>{
    console.log("db is sucessfully Connected");
});






// Which among these statements will make a connection to the database ‘contactlistdb’ running on localhost when we’re using mongoose?===mongoose.connect('mongodb://localhost/contact_list_db');

// Select all the valid schema types in MongoDB.String ,Number ,Date ,Boolean ,Mixed 

// versionkey(__v) is a property set on each document when first created by Mongoose.
