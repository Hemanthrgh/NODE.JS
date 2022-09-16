// import the http module
const http=require("http");
const port=8000;//it is a unique id for server
const server=http.createServer();//creating the server

server.listen(port,()=>{
    console.log(`server start listening on ${port}`);
})

