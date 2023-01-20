import express, { Express,request,response } from "express";
import dotenv from "dotenv";   


//Configuracion
dotenv.config();

//Crear nuestra aplicacion con Express 
const app: Express = express();
const port: string | number = process.env.PORT || 8000;


//Creamos nuestra rutas
app.get('/', (req, res) => {
    //Send Hello work 
    res.send("Bienvenido");
});     

//Ejecutar nuestra aplicacion y escuchamos
app.listen(port,()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
})
