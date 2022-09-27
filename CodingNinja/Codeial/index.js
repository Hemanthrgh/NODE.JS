const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const expressLayouts=require("express-ejs-layouts");
const port=8000;
const db=require("./config/mongoose");


app.use(express.urlencoded());
app.use(cookieParser());


// to use static files like css js etc
app.use(express.static("./assets"));

// extract styles and scripts from sub folder into a layouts
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);


// use layouts
app.use(expressLayouts);

// use express router
app.use("/",require(`./routes/index.js`));

// set up view engine
app.set("view engine","ejs");
app.set("views","./views");

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in listening ${port}`);
    return;}
    console.log(`YUP SUCESSFULLY START LISTENING ON PORT: ${port}`);
})



// Which of the following systems record changes to a file in a project over time?===Version Control

// Which of the following adds all the changes in files for staging?===git add

// Which of the following command allows you to update the remote repository?===push