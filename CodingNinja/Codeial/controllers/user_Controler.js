console.log("user Controler ");
module.exports.profile=(req,res)=>{
   return res.render("profile",{
    title:"Profile"
   })
}

