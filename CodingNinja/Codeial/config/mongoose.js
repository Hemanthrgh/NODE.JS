const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/codeial_Development");
const db=mongoose.connection;
db.on("error",console.error.bind("console","error in connecting to db"));
db.once("open",()=>{console.log("sucssesfully Connected to the Data Base");});