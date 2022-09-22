const express=require("express");
const router=express.Router();

console.log(`router is woring fine`);
const homeController=require(`../controllers/home_Controler.js`);
console.log("line 6");
router.get(`/`,homeController.home);
router.use('/user',require("./users.js"));//it is uses the user and navigate to user.js

module.exports=router;






// /foo and /foo/ are treated the same by the express router.
