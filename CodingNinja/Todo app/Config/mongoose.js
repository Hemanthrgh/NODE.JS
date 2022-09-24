// // require mongoose
// const mongoose=require("mongoose");
// // connect to the Data Base
// mongoose.connect("mongodb://localhost/TODO_Data")

// // aquire Connection to check connect or not
// const db=mongoose.connection;

// db.on("error",console.error.bind("console","error in connecting data base"));

// db.once("open",()=>{
//     console.log("sucsess fully connected to the DB");
// })


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