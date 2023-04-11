var express = require('express');
var router = express.Router();
const controlador= require('../controlador/controlador')

router.get('/inicio', controlador.mostrarPaginaPrincipal)

module.exports = router;