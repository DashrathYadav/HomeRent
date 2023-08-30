
module.exports.response=(res,statusCode,msg,result)=>{
    const response={
        msg:msg,
        result:result,
    }
    return res.status(statusCode).send(response);
}