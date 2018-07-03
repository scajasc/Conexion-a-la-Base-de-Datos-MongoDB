const mongoose = require('mongoose'); //llamo a moongose
const {Schema} = mongoose; //definir esquemas

//como iran mis tablas
const dispositivosSchema =  new Schema({
    nombre: {type:String, required:true},
    ping: {type:String, required:true},
    disponibilidad: {type:Boolean, required:true}
}); 

//pasar esquema a mongoose
module.exports = mongoose.model('dispositivos' , dispositivosSchema);