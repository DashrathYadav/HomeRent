
const tenantSchema = require("../Schema/tenantSchema");


module.exports.adminAuthorize=async (req,res,next)=>{

    const id=req.body._id;
    const user= await tenantSchema.findById(id);
    console.log(user);
    if(user.role==='Admin')
    {
        next();
        return;
    }
    else
   {
    res.status(401).send("Not a Authorized user");
    return;
   }


} 