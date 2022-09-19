// Is Express the only framework for Node.js?===No
// What is the extended name for MVC?//MODEL VIEW CONTROLER
// package.json contains all the dependencies required by express.===false

// What are core features of Express framework?Allows to set up middlewares to respond to HTTP Requests
// Defines a routing table which can work as per HTTP Method and URL
// Dynamically render HTML Pages

// What does the 'node_modules' folder contain?===Libraries that Node.js requires


// just require express
const express=require("express");
const path=require("path");
const port=8000;
const app=express();


app.set('view engine','ejs');//to set the view engine as ejs
app.set('views',path.join(__dirname,'views'));//to set the path for view to view engine __dirname grabe current directory adress
app.use(express.urlencoded());//just for encode the data passed in the middle ware
app.use(express.static("./assets"));

app.get('/',(req,res)=>{//it is running when url is "/"
    // console.log(req);
    // res.send('<h1>cool it is running!</h1>');
    // // res.end('<h1>cool it is running!!!!</h1>');
    return res.render("home",{title:"Home"});//redering the page and asigning the value to the variable
})
  const Contact_List=[
        {
            name:"HEMANTH",
            phone:8311109560
        },
        {
            name:"Rangegowda",
            phone:8311109560
        }
    ]
app.get('/Contacts',(req,res)=>{
  
    return res.render("Contacts",{
        title:'Contact_List',
        Contact_List:Contact_List
});
})

app.post("/Update_Contact",(req,res)=>{
    console.log(req.body.name);
    Contact_List.push(req.body);
    res.redirect("Contacts");

})
//for delete the contact 
app.get("/delete_Contact/",(req,res)=>{
    console.log( req.query);
    // get query from url
    const phone=req.query.phone;
     // const index=Contact_List.indexOf(phone);
    const index=Contact_List.findIndex(contact=>contact.phone==phone);
    console.log(phone,index);
    if(index!=-1){}
    Contact_List.splice(index,1);
   return res.redirect("back");
})

app.listen(port,(err)=>
{
    if(err){
    return  console.log("Error in listening");
    }
    console.log(`Yup server is start listening on port: ${port}`);
}
)





// Which command will install express in your project?===npm istall express

// __dirname gives the the directory name of the current module.

// <%= x %> prints the value of x into the ejs template (HTML)

// Which among these are the task that a middleware function can perform?===Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.

// Before the controller, all the middlewares get executed in chronological order. So first middleware-1 is called. But since we haven’t called the next() function in it, the next middleware doesn’t get triggered. That is why only “middleware 1 is called” is printed.
//
// Query params can be used to send multiple query parameters

