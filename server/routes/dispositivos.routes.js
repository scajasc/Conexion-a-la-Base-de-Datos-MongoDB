const express = require('express');
const router = express.Router();

const dispositivosCtrl = require('../controllers/dispositivos.controller');

router.get('/' , dispositivosCtrl.getDispositivos );
router.post('/' , dispositivosCtrl.createDispositivos ); //se usa el post cuando el usuario quiere guardar datos
router.get('/:id' , dispositivosCtrl.getDispositivo);
router.put('/:id' , dispositivosCtrl.editDispositivo); //put es para editar 
router.delete('/:id' , dispositivosCtrl.deleteDispositivo);

module.exports = router;