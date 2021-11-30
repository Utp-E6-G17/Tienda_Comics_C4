const comicsModel = require('../models/comicsModel');


module.exports = class comicController{
    static async getAllComics(request, response){
        try {
            const comics = await comicsModel.find();
            if(comics != null){
                response.status(200).json(comics);
            }
            else{
                response.status(404).json();
            }
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
    static async updateComic(request,response){
        try {
            const isbn = request.params.isbn;
            const data = request.body;
            const comics = await comicsModel.updateOne({isbn: isbn},data);
            response.status(200).json(comics);
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
    
}
