module.exports.home=(req,res)=>{
   console.log(req.cookies);
   res.cookie("userID","Changed to somthing");
   return res.render("home",{
    title:'Home'
   })
}