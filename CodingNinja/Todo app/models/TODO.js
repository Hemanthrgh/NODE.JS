const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema({
    Description:{
        type:String,
        required:true
    },
    Catogory:{
        type:String,
        required:true
    },
    Due_Date:{
        type:Date,
        required:true
    }
})

const todo=mongoose.model("todo",todoSchema);
module.exports=todo;