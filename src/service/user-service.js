const { JWT_key } = require('../config/serverConfig');
const UserRepository = require('../repository/user-repository');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error; 
        }
    }

    createtoken(user){
        try {
            const result = jwt.sign(user,JWT_key,{expiresIn:'1h'});
            return result;
        } catch (error) {
            console.log("something went wrong in service layer in token creation");
            throw error; 
        }
    }

    verifyToken(token){
        try {
            const result = jwt.verify(token,JWT_key);
            return result;
        } catch (error) {
            console.log("something went wrong in service layer in token verification");
            throw error; 
        }
    }

    checkPassword(userinputPlainpassword,encryptedpassword){
        try {
            return bcrypt.compareSync(userinputPlainpassword,encryptedpassword);
        } catch (error) {
            console.log("something went wrong in service layer in checking password");
            throw error; 
        }
    }




}

module.exports = UserService;