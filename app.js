
//Se trae el modelo de servidor
const ServidorModelo=require('./models/ServidorModelo.js')

//se tare el dotenv
require('dotenv').config()

 //Puedo personalizar mi servidor
 const servidorJugadores=new ServidorModelo()

 //ENCENDER EL SERVIDOR
 servidorJugadores.encenderServidor()




 
