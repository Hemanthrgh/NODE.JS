const express=require("express");
const router=express.Router();
const userControler=require("../controllers/user_Controler");
console.log("user routes is accesible");
router.get("/profile",userControler.profile);//nafvigate to user profile
router.get("/sign_in",userControler.sign_in);
router.get("/sign_up",userControler.sign_up);
router.post("/create",userControler.create);

module.exports=router;