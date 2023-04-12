const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'database-1.citpa2zzpc6e.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: '222241005',
    database: 'base_productos'
  });

conexion.connect(
    (err)=>{
        if(!err){
            console.log('conexion establecida')
        }else{
            console.log('error de conexion')
        }
    }
)



module.exports = conexion


