const User=require("../models/user");

console.log("user Controler ");
module.exports.profile=(req,res)=>{
   return res.render("profile",{
    title:"Profile"
   })
}

module.exports.sign_in=(req,res)=>{
   res.render("user_sign_in",{
      title:"Codeial|sign_in"
   })
}
module.exports.sign_up=(req,res)=>{
   res.render("user_sign_up",{
      title:"Codeial|sign_up"
   })
}

// get sign up data
module.exports.create=(req,res)=>{
   console.log(req.body);
   if(req.body.password != req.body.ConfirmPassword){
      console.log("Confirm password is not same")
      return res.redirect("back");
   }console.log("line27");
   User.findOne({email:req.body.email},(err,user)=>{
      if(err){
         console.log("error in find email in signing up \n");
         return;
      }
      if(!user){
         User.create(req.body,(err,user)=>{
            if(err){
               console.log("error in Creating a user in signing up \n",err);
               return;
            }
            return res.redirect("/user/sign_in")
         })
      }else{
         return res.redirect("back");}
      
   })
}
//Create a sesion for the user
module.exports.createSesion=(req,res)=>{
   // TODO LATER
}

