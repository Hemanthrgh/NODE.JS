// import the http module
const http=require("http");
const fs=require('fs');//importing FILESYSTEM MODULE
const port=8000;//it is a unique id for server

function requestHandler(req,res){
    res.writeHead(200,"Content-type:html/txt");

    // read file  async and it must have collback function
    fs.readFile("./read.html",(err,data)=>{
    if(err){
        res.end("<h1>Error </h> \n"+err);
    }
    res.end(data);

            })
}
const server=http.createServer(requestHandler);//creating the server

server.listen(port,()=>{
    console.log(`server start listening on ${port}`);
})



// Which command will be used to set up a new or existing package?----npm init
// package.json contains the metadata and project dependencies of Node project?
// We can run multiple Node.js servers on a single machine.
// Which of the following will create an instance of HTTP module in Node.js file?===var http = require("http");
// Which among these will run our server on port 3000===const http = require('http'); const port = 3000; const server = http.createServer(); server.listen(port, function(err){ console.log("Server is up and running on port:", port); });
