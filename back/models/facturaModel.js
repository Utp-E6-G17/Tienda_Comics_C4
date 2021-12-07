const mongoose = require("mongoose"); 

const facturaSchema = mongoose.Schema({
    comic:String,
    cliente:String,
    total:Number,
    comicisbn:String
})

module.exports = mongoose.model("facturas",facturaSchema);