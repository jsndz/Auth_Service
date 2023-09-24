const UserService = require('../service/user-service');

const {response} = require('express');

const userService = new UserService();

const create = async (req,res) => {
    try {
        const response = await userService.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            data: response,
            error:{},
            sucess:true,
            message:"created the User"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            error:{error},
            sucess:false,
            message:"couldnt create the User"
        })
    }
}

module.exports = {
    create
}