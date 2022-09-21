module.exports.home=(req,res)=>{
    console.log(`home controller is accesible`);
    res.end(`<h1>home controller is accesible</h1>`);
}