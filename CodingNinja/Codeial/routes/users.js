const express=require("express");
const router=express.Router();
const userControler=require("../controllers/user_Controler");
console.log("user routes is accesible");
router.get("/profile",userControler.profile);//nafvigate to user profile

module.exports=router;