const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    nombre:{type:String, required:true},
    nit:{type:String, required:true},
    direccion:{type:String, required:true},
    telefono:{type:String, required:true},
    email:{type:String, required:true}

})
module.exports = mongoose.model('cliente',productSchema)