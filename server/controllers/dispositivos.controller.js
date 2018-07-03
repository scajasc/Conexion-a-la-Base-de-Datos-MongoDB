
const dispositivo = require('../models/dispositivos'); // permite hacer consulta a la bdd
const dispositivosCtrl = {}; //definimos solo un oibjeto

//metodos crud
dispositivosCtrl.getDispositivos = async (req, res) => {
    const dispositivos = await dispositivo.find(); //con aawait le digo a mi funcion que tomara tiempo en la busqueda, pero lo guardara en una constante cuando termine
    res.json(dispositivos);
}

dispositivosCtrl.createDispositivos = async (req, res) => {
    console.log(req.body);
    res.json('Recibe datos');
}

dispositivosCtrl.getDispositivo = (req, res) => {
    res.json({
        status: 'Las ips iran aqui'
    });
}

dispositivosCtrl.editDispositivo = function(){
    
}

dispositivosCtrl.deleteDispositivo = function(){
    
}

module.exports = dispositivosCtrl;