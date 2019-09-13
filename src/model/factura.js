const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const facturaSchema = new Schema({
    codigo:{type:String, required:true},
    nombre:{type:String, required:true},
    nit:{type:String, required:true},
    direccion:{type:String, required:true},
    telefono:{type:String, required:true},
    email:{type:String, required:true},
    productos:[{
        nombre:{type:String, required:true},
        descripcion:{type:String, required:true},
        cantidad:{type:Number, required:true},
        precio:{type:Number, required:true},
        iva:{type:Number, required:true},
    
    }],
    fecha_factura: { type: Date, default: Date.now }

})
module.exports = mongoose.model('factura',facturaSchema)