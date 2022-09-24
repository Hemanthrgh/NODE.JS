// required a express
const express =require("express");
// creating a app
const db=require("./Config/mongoose");
const todoSchema=require("./models/TODO");
const app=express();
const port=8000;//set a port as 8000

// set up a veiw engine 
app.set("view engine","ejs");
app.set("views","./views");

app.use(express.urlencoded());

app.get("/",(req,res)=>{
    todoSchema.find({},(err,todoData)=>{
        if(err){
            return res.end("error in acssesing Data Base");
        }
        return res.render("home.ejs",{
        title:"TODO App",
        tasks:todoData
    });
    })
   
});

app.post("/AddToDo",(req,res)=>{
    console.log(req.body);

    todoSchema.create({
        Due_Date:req.body.Due_Date,
        Description:req.body.Description,
        Catogory:req.body.Catogory
    },(err,newdata)=>{
        if(err){
            res.end(err);
        }
        console.log(newdata);
        return res.redirect("back")
    })

    // res.redirect("back");

});

app.get("/DeletTODO",(req,res)=>{
    console.log(req.query);
    const id=req.query;
    for(let i=0;i<Object.keys(id).length;i++){
    todoSchema.findByIdAndDelete(Object.keys(id)[i],(err)=>{
        if(err){
            return res.end(err);
        }
        res.redirect("back");
    })}
    
})

app.listen(port,(err)=>{
    console.log(`server is start listning on: ${port} ${err}`);
})
