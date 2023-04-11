const conexion = require("../config/conexion")

module.exports ={
    insertarUsuario: (conexion, data)=>{
        conexion.query("INSERT INTO registros(nombre,usuario,pass) VALUES(?,?,?)", [data.nombre, data.usuario, data.pass])
    },
    obtener:(conexion,funcion)=>{
        conexion.query("SELECT * FROM productosdos",funcion)
    },
    insertarTenis: (conexion, datos, archivos)=>{
        conexion.query("INSERT INTO productosdos(id,nombre,descripcion,tallaCinco,tallaSeis,tallaSiete,tallaOcho,tallaNueve,tallaDiez,imagen,precio) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
        [datos.id,datos.nombre, datos.descripcion, datos.tallaCinco, datos.tallaSeis, datos.tallaSiete,datos.tallaOcho,datos.tallaNueve,datos.tallaDiez, archivos.filename, datos.precio])

    },
    eliminarTenis: (conexion, id)=>{
        conexion.query("DELETE FROM productosdos WHERE id=?", [id])
    },
    retornarDatos: (conexion, id, funcion)=>{
        conexion.query("SELECT * FROM productosdos WHERE id=?",[id],funcion)
    },
    actualizar: (conexion, datos, funcion)=>{
        conexion.query("UPDATE productosdos SET id=?,nombre=?, descripcion=?, tallaCinco=?, tallaSeis=?,tallaSiete=?,tallaOcho=?,tallaNueve=?,tallaDiez=?, precio=? WHERE id=?", 
        [datos.id, datos.nombre, datos.descripcion, datos.tallaCinco, datos.tallaSeis, datos.tallaSiete,datos.tallaOcho,datos.tallaNueve,datos.tallaDiez, datos.precio, datos.id], funcion)
    },
    validar:(conexion,datos, funcion)=>{
        conexion.query("SELECT * from registros WHERE usuario = ?", [datos.usuario], funcion)
    },
    actualizarArchivo:(conexion, datos, archivo)=>{
        conexion.query("UPDATE productosdos SET imagen =? WHERE id= ?",[archivo.filename, datos.id])
    },
    mostrarTodo:(conexion, funcion)=>{
        conexion.query("SELECT * from productosdos", funcion)
    }

}
