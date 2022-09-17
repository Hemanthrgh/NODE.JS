// Is Express the only framework for Node.js?===No
// What is the extended name for MVC?//MODEL VIEW CONTROLER
// package.json contains all the dependencies required by express.===false

// What are core features of Express framework?Allows to set up middlewares to respond to HTTP Requests
// Defines a routing table which can work as per HTTP Method and URL
// Dynamically render HTML Pages

// What does the 'node_modules' folder contain?===Libraries that Node.js requires


// just require express
const express=require("express");
const port=8000;
const app=express();

app.listen(port,(err)=>
{
    if(err){
    return  console.log("Error in listening");
    }
    console.log(`Yup server is start listening on port: ${port}`);
}
)