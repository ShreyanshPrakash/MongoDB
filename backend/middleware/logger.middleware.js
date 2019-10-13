
const loggerMiddleware = (req,res,next) => {

    console.log("MiddleWare works");
    next();

}

module.exports = { loggerMiddleware };