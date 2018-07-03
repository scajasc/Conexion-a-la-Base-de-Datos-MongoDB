const express = require('express');
const morgan = require('morgan');
const app = express(); //encargada de tener toda la funcionalidad de mi configuracion

const {mongoose} = require('./database');  //lamando a db solo funcion de conection

//seccion de comfiguraciones  de servidor
app.set('port' , process.env.PORT || 3000); //damos el nombre a mi variable

//procesamiento de datos middlewares
app.use(morgan('dev')); //ver l0o que pide el usuario por consola
app.use(express.json()); //ayuda a entender el codigo que viene en formato json

//rutas de serv idor - routes
app.use('/api/dispositivos' ,require('./routes/dispositivos.routes'));

//iniciar servidor
app.listen(app.get('port') , () => {
    console.log('esto esta funcando mi don');
});