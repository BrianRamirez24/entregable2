const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    nombre:{type:String, required:true},
    descripcion:{type:String, required:true},
    cantidad:{type:Number, required:true},
    precio:{type:Number, required:true},
    iva:{type:Number, required:true},

})
module.exports = mongoose.model('productos',productSchema)