const {User} = require('../models/index');

class UserRepository {
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
           console.log("something went wrong in repository layer");
           throw error; 
        }

    }

    async destroy(userId){
        try {
            const response = await User.destroy({
                where:{
                    id:userId
                }
            
            });
            return user;
        } catch (error) {
            console.log("something went wrong in repository layer");
           throw error; 
        }
    }
}
 module.exports = UserRepository;