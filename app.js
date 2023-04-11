const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config({path:'./.env'})
const PORT = process.env.PORT 
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extends: false}));
const ejs = require('ejs')
app.set('view engine', 'ejs');
const  path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
const morgan = require('morgan')
const multer = require('multer')
/*const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const local = require('passport-local').Strategy
const mysql = require('mysql');
const util = require('util');
*/



var iniciarSesion = require('./routes/iniciarSesion');
var tenisRouter = require('./routes/tenis')
var indexRouter = require('./routes/index')

app.use('/', iniciarSesion);
app.use('/', tenisRouter)
app.use('/', indexRouter)
/*app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser('secreto'))
app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}))
passport.use(new local((usurname, password, done)=>{

}))
*/

app.listen(PORT, (req,res)=>{
    console.log("Servidor escuchando en el puerto", PORT)
})




module.exports = app;