const express=require("express");
const router=express.Router();

// console.log(`router is woring fine`);
const homeController=require(`../controllers/home_Controler.js`);

router.get(`/`,homeController.home);

module.exports=router;