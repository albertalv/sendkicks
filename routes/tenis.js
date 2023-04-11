var express = require('express');
var router = express.Router();
const controladorTenis = require('../controlador/controlTenis')

router.get('/DR5415_103',controladorTenis.mostrarDR5415_103)
router.post('/DR5415_103', controladorTenis.validarCantidadDR5415)
router.get('/CD4487_100',controladorTenis.mostrarCD4487)
router.post('/CD4487_100', controladorTenis.validarCantidadCD4487)
router.get('/GW0264',controladorTenis.mostrarGW0264)
router.post('/GW0264', controladorTenis.validarCantidadGW0264)
router.get('/CT2552_800',controladorTenis.mostrarCT2552_800)
router.post('/CT2552_800', controladorTenis.validarCantidadCT2552_800)
router.get('/DZ5485-612',controladorTenis.mostrarDZ5485_612)
router.post('/DZ5485-612', controladorTenis.validarCantidadDZ5485_612)
router.get('/B75571',controladorTenis.mostrarB75571)
router.post('/B75571', controladorTenis.validarCantidadB75571)
router.get('/FW4980',controladorTenis.mostrarFW4980)
router.post('/FW4980', controladorTenis.validarCantidadFW4980)
router.get('/CV9388_100',controladorTenis.mostrarCV9388_100)
router.post('/CV9388_100', controladorTenis.validarCantidadCV9388_100)
router.get('/CU1726_101',controladorTenis.mostrarCU1726_101)
router.post('/CU1726_101', controladorTenis.validarCantidadCU1726_101)
router.get('/DJ0950_116',controladorTenis.mostrarDJ0950_116)
router.post('/DJ0950_116', controladorTenis.validarCantidadDJ0950_116)
router.get('/carrito/:id', controladorTenis.carrito)
router.get('/gracias', controladorTenis.mensajeFinal)

module.exports = router;
