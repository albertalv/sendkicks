const conexion = require("../config/conexion")

module.exports ={
    retornarDatos: (conexion, id, funcion)=>{
        conexion.query("SELECT * FROM productosdos WHERE id=?",[id],funcion)
    },obtenerDatosUsuario: (conexion, funcion)=>{
        conexion.query("SELECT * FROM cliente", funcion)
    },
    mostrarDR5415_103: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'DR5415_103' ", funcion)
    },
    validarDR5415_103:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
        //si se desconocen las columnas o estas son dinamicas, se puede usar template string con comillas inversas
        // en este caso se define de antemano la variable talla y de donde viene, en lugar de hacerlo con 
        //corchetes como parametros como en las otras consultas 
    },
    mostrarCD4487_100: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'CD4487_100' ", funcion)
    },
    validarCD4487_100:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
    },
    mostrarGW0264: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'GW0264' ", funcion)
    },
    validarGW0264:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
    },
    mostrarCT2552_800: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'CT2552_800' ", funcion)
    },
    validarCT2552_800:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
    },
    mostrarDZ5485_612: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'DZ5485-612' ", funcion)
    },
    validarDZ5485_612:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
    },
    mostrarB75571: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'B75571' ", funcion)
    },
    validarB75571:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
    },
    mostrarFW4980: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'FW4980' ", funcion)
    },
    validarFW4980:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
    },
    mostrar: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos", funcion)
    },mostrarCV9388_100: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'CV9388_100' ", funcion)
    },
    validarCV9388_100:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
    },mostrarCU1726_101: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'CU1726_101' ", funcion)
    },
    validarCU1726_101:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
    },mostrarDJ0950_116: (conexion, funcion)=>{
        conexion.query("SELECT * from productosdos WHERE id = 'DJ0950_116' ", funcion)
    },
    validarDJ0950_116:(conexion, datos,funcion)=>{
        let talla = datos.talla
        conexion.query(`SELECT ${talla} FROM productosdos`,funcion)
    }
}


