const express = require('express');
const dotenv = require('dotenv');

//Configuracion de archivo .env

dotenv.config();

//Crear nuestra aplicacion con Express 
const app = express();
const port = process.env.PORT || 8000;

//Creamos nuestra rutas
app.get('/',(req,res) => {
    //Send Hello work 
    res.send("Bienvenido");
});

//Ejecutar nuestra aplicacion y escuchamos
app.listen(port,()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
})

