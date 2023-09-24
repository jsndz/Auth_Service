const validateAuthUser = (req,res,next) => {
    if(!req.body.email || !req.body.password){
        return res.status(500).json({
            data: {},
            error:{error},
            sucess:false,
            message:"missing password or email"
        })
    }
    next();
}

module.exports = {validateAuthUser};