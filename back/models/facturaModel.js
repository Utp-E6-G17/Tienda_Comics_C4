const mongoose = require("mongoose"); 

const facturaSchema = mongoose.Schema({
    comicisbn:String,
    fecha:Date,
    cliente:String,
    total:Number,
    serial:String
})

module.exports = mongoose.model("facturas",facturaSchema);