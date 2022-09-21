const express=require("express");
const app=express();
const port=8000;


// use express router
app.use("/",require(`./routes/index.js`));

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in listening ${port}`);
    return;}
    console.log(`YUP SUCESSFULLY START LISTENING ON PORT: ${port}`);
})



// Which of the following systems record changes to a file in a project over time?===Version Control

// Which of the following adds all the changes in files for staging?===git add

// Which of the following command allows you to update the remote repository?===push

