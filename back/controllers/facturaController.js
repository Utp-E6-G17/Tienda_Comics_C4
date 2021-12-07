const facturaModel = require('../models/facturaModel');


module.exports = class facturaController{
    static async getAllFactura(request, response){
        try {
            const facturas = await facturaModel.find();
            if(facturas != null){
                response.status(200).json(facturas);
            }
            else{
                response.status(404).json();
            }
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
    static async newFactura(request, response){
        try {
            const doc = request.body;
            const facturas = await facturaModel.create(doc);
            response.status(201).json(facturas);

        } catch (error) {
            return response.status(500).json({
                message: 'Ocurrio algo inseperado',error
            })

        }
    }
    static async delete(request, response){
        try {
            const comicisbn = request.params.comicisbn;
            const facturas = await facturaModel.deleteOne({comicisbn: comicisbn});
            response.status(200).json(facturas);

        } catch (error) {
            return response.status(400).json({
                message: 'Ocurrio algo inseperado',error
            })

        }
    }
    
}