const userModel = require('../models/userModel');

module.exports = class userController{
    static async getAllusers(request, response){
        try {
            const users = await userModel.find();
            if(users != null){
                response.status(200).json(users);
            }
            else{
                response.status(404).json();
            }
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
}