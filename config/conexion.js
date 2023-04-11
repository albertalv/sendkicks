const mysql = require('mysql')
require('dotenv').config('./.env');
const HOST = process.env.HOST
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE

const conexion = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
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


