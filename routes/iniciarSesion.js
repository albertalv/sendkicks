var express = require('express');
var router = express.Router();
const controlador = require('../controlador/controlador')
const multer = require('multer')

let fecha = Date.now()
let ruta = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null,'./public/images/')
    },
    filename: (req, file, callback)=>{
        console.log(file)
        callback(null, fecha + "_" + file.originalname)
    }
})

let cargar = multer({storage:ruta})
router.get('/formulario', controlador.mostrarIndex)
router.post('/formulario', controlador.guardarUsuario)
router.get('/administrador', controlador.mostrarCrud)
router.get('/crear', controlador.mostrarCrear)
router.post('/crear',cargar.single("imagen"), controlador.crearCrud)
router.post('/eliminar/:id', controlador.eliminarCrud)
router.get('/editar/:id', controlador.mostrarEditar)
router.post('/actualizar', cargar.single("imagen"),controlador.actualizarCrud)
router.get('/iniciarSesion', controlador.iniciarSesion)
router.post('/iniciarSesion', controlador.validarUsuario)

module.exports = router;