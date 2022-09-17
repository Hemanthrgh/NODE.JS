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
app.set('views',path.join(__dirname,'views'));//to set the path for view to view engine __dirname gibe current directory adress

app.get('/',(req,res)=>{//it is running when url is "/"
    // console.log(req);
    // res.send('<h1>cool it is running!</h1>');
    // // res.end('<h1>cool it is running!!!!</h1>');
    return res.render("home",{title:"Home"});//redering the page and asigning the value to the variable
})

app.get('/Contacts',(req,res)=>{
    return res.render("Contacts",{title:'Contact_List'});
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

