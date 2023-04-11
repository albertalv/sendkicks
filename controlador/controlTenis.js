const conexion = require('../config/conexion')
const modeloTenis = require('../modelo/modeloTenis')


module.exports ={
    carrito:(req,res)=>{
        modeloTenis.retornarDatos(conexion, req.params.id, (err,registros)=>{
            res.render('sesiones/carrito', {tenis: registros[0]})
        })
    },mensajeFinal: (req,res)=>{
        res.render('sesiones/gracias')
    },
    mostrarDR5415_103: (req,res)=>{
        modeloTenis.mostrarDR5415_103(conexion, (err,datos)=>{
            res.render('productos/DR5415_103', {tenis: datos})
        })
    },
    validarCantidadDR5415:(req,res)=>{
        modeloTenis.validarDR5415_103(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            // si se conoce la propiedad del objeto se usa el punto, ej objeto.propiedad, 
            //si se desconoce la propiedad o esta es dinamica, se puede pasar una variable a traves de corchetes, ej objeto[propiedadDinamica]
            if(cantidad <= disponibilidad){
                res.render('sesiones/disponibilidad', {codigo: 'DR5415_103'})
            }else{
                res.render('sesiones/noDisponibilidad', {codigo: 'DR5415_103', nombre: 'Jordan 4 SB Pine Green'}) 
            }
        })
    },
    mostrarCD4487:(req,res)=>{
        modeloTenis.mostrarCD4487_100(conexion, (err,datos)=>{
            res.render('productos/CD4487_100', {tenis:datos})
        })
    },
    validarCantidadCD4487:(req,res)=>{
        modeloTenis.validarCD4487_100(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            if(cantidad <= disponibilidad){
                res.render('sesiones/disponibilidad', {codigo: 'CD4487_100'})
            }else{       
                res.render('sesiones/noDisponibilidad', {codigo: 'CD4487_100', nombre: 'Jordan 1 High Travis Scott'}) 
                
            }
        })
    },
    mostrarGW0264:(req,res)=>{
        modeloTenis.mostrarGW0264(conexion, (err,datos)=>{
            res.render('productos/GW0264', {tenis:datos})
        })
    },
    validarCantidadGW0264:(req,res)=>{
        modeloTenis.validarGW0264(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            if(cantidad <= disponibilidad){
                res.render('sesiones/disponibilidad', {codigo: 'GW0264'})
            }else{       
                res.render('sesiones/noDisponibilidad', {codigo: 'GW0264', nombre: 'Forum Low Bad Bunny First Cafe'}) 
                
            }
        })
    },
    mostrarCT2552_800:(req,res)=>{
        modeloTenis.mostrarCT2552_800(conexion, (err,datos)=>{
            res.render('productos/CT2552_800', {tenis:datos})
        })
    },
    validarCantidadCT2552_800:(req,res)=>{
        modeloTenis.validarCT2552_800(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            if(cantidad <= disponibilidad){
                res.render('sesiones/disponibilidad', {codigo: 'CT2552_800'})
            }else{       
                res.render('sesiones/noDisponibilidad', {codigo: 'CT2552_800', nombre: 'Nike Dunk Low Strangelove'})
            }
        })
    },
    mostrarDZ5485_612:(req,res)=>{
        modeloTenis.mostrarDZ5485_612(conexion, (err,datos)=>{
            res.render('productos/DZ5485-612', {tenis:datos})
        })
    },
    validarCantidadDZ5485_612:(req,res)=>{
        modeloTenis.validarDZ5485_612(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            if(cantidad <= disponibilidad){
                 res.render('sesiones/disponibilidad', {codigo: 'DZ5485-612'})
            }else{
                res.render('sesiones/noDisponibilidad', {codigo: 'DZ5485-612', nombre: 'Jordan 1 High Lost and Found'})       
            }
        })
    },
    disponiblesDZ5485_612:(req,res)=>{
        modeloTenis.mostrar(conexion, (err,datos)=>{
            res.render('sesiones/disponibilidad', {tenis:datos})
        })
    },
    mostrarB75571:(req,res)=>{
        modeloTenis.mostrarB75571(conexion, (err,datos)=>{
            res.render('productos/B75571', {tenis:datos})
        })
    },
    validarCantidadB75571:(req,res)=>{
        modeloTenis.validarB75571(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            if(cantidad <= disponibilidad){
                res.render('sesiones/disponibilidad', {codigo: 'B75571'})
            }else{       
                res.render('sesiones/noDisponibilidad', {codigo: 'B75571', nombre: 'Adidas Waverunner'})
            }
        })
    },
    mostrarFW4980:(req,res)=>{
        modeloTenis.mostrarFW4980(conexion, (err,datos)=>{
            res.render('productos/FW4980', {tenis:datos})
        })
    },
    validarCantidadFW4980:(req,res)=>{
        modeloTenis.validarFW4980(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            if(cantidad <= disponibilidad){
                res.render('sesiones/disponibilidad', {codigo: 'FW4980'})
            }else{
                res.render('sesiones/noDisponibilidad', {codigo: 'FW4980', nombre: 'Yeezy Azael'})       
            }
        })
    },
    disponiblesFW4980:(req,res)=>{
        modeloTenis.mostrar(conexion, (err,datos)=>{
            res.render('sesiones/disponibilidad', {tenis:datos})
        })
    },mostrarCV9388_100:(req,res)=>{
        modeloTenis.mostrarCV9388_100(conexion, (err,datos)=>{
            res.render('productos/CV9388_100', {tenis:datos})
        })
    },
    validarCantidadCV9388_100:(req,res)=>{
        modeloTenis.validarCV9388_100(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            if(cantidad <= disponibilidad){
                res.render('sesiones/disponibilidad', {codigo: 'CV9388_100'})
            }else{       
                res.render('sesiones/noDisponibilidad', {codigo: 'CV9388_100', nombre: 'Jordan 4 Off-White'})
            }
        })
    },mostrarCU1726_101:(req,res)=>{
        modeloTenis.mostrarCU1726_101(conexion, (err,datos)=>{
            res.render('productos/CU1726_101', {tenis:datos})
        })
    },
    validarCantidadCU1726_101:(req,res)=>{
        modeloTenis.validarCU1726_101(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            if(cantidad <= disponibilidad){
                res.render('sesiones/disponibilidad', {codigo: 'CU1726_101'})
            }else{       
                res.render('sesiones/noDisponibilidad', {codigo: 'CU1726_101', nombre: 'Dunk Low Syracuse'})
            }
        })
    },mostrarDJ0950_116:(req,res)=>{
        modeloTenis.mostrarDJ0950_116(conexion, (err,datos)=>{
            res.render('productos/DJ0950_116', {tenis:datos})
        })
    },
    validarCantidadDJ0950_116:(req,res)=>{
        modeloTenis.validarDJ0950_116(conexion, req.body, (err,datos)=>{
            let {talla, cantidad} = req.body
            let disponibilidad = datos[0][talla] 
            if(cantidad <= disponibilidad){
                res.render('sesiones/disponibilidad', {codigo: 'DJ0950_116'})
            }else{       
                res.render('sesiones/noDisponibilidad', {codigo: 'DJ0950_116', nombre: 'Dunk Low Off-White Lot 31'})
            }
        })
    }
}
