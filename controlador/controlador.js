const conexion = require('../config/conexion')
const modeloUno = require('../modelo/modeloUno')

module.exports={
    mostrarPaginaPrincipal:(req,res)=>{
        modeloUno.mostrarTodo(conexion, (err,datos)=>{
            res.render('inicio/index', {imagenes: datos})
        })
    },
    mostrarIndex: (req,res)=>{
        res.render('sesiones/formulario')
    },
    guardarUsuario:(req,res)=>{
        modeloUno.insertarUsuario(conexion,req.body)
        res.render('sesiones/iniciarSesion')
    },
    mostrarCrud: (req,res)=>{
        modeloUno.obtener(conexion, (err,datos)=>{
            res.render('sesiones/administrador', {tenis: datos})
        }) 
    },
    mostrarCrear: (req,res)=>{
        res.render('sesiones/crear')
    },
    crearCrud:(req,res)=>{
        modeloUno.insertarTenis(conexion, req.body, req.file)
        res.redirect('/administrador')
    },
    eliminarCrud:(req,res)=>{
        modeloUno.eliminarTenis(conexion, req.params.id)
        res.redirect('/administrador')
    },
    mostrarEditar:(req,res)=>{
        modeloUno.retornarDatos(conexion, req.params.id, (err,registros)=>{
            res.render('sesiones/editar', {tenis: registros[0]})
        })
    },
    actualizarCrud:(req,res)=>{
        if(req.body.nombre || req.body.descripcion || req.body.tallaCinco || req.body.tallaCinco || req.body.tallaSeis || req.body.tallaSiete || req.body.tallaOcho || req.body.tallaNueve || req.body.tallaDiez){
            modeloUno.actualizar(conexion,req.body, (err)=>{
            })
        } 
        if(req.file){
            if(req.file.filename){
                modeloUno.actualizarArchivo(conexion, req.body, req.file)
            }
        }
        res.redirect('/administrador')
    },
    validarUsuario:(req,res)=>{
        modeloUno.validar(conexion, req.body, (err,datos)=>{
            let user = datos[0].usuario
            let contra = datos[0].pass
            let {pass, usuario} = req.body
            if(user === usuario & contra === pass){
                res.redirect("/administrador")
            }else{
                res.send("<h1>USUARIO O CONTRASEÑA INCORRECTA PTO</h1>")
            }
        })
    }, 
    iniciarSesion: (req,res)=>{
        res.render('sesiones/iniciarSesion') 
    }
}