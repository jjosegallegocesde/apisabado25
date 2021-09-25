const express = require('express')

class ServidorModelo{

    constructor(){

        this.app = express()
        this.enrutarPeticiones()

    }

    encenderServidor(){

        this.app.listen(process.env.PUERTO,function(){
            console.log("Servidor encendido... "+process.env.PUERTO)
        })

    }

    enrutarPeticiones(){
        
        this.app.get('/avanzada/v1/jugadores', function (req, res) {
            res.send('peticion de tipo GET (Para buscar todos los jugadores)')
        })
          
        this.app.get('/avanzada/v1/jugadores/id', function (req, res) {
            res.send('peticion de tipo GET (Para buscar un jugador)')
        })
          
        this.app.post('/avanzada/v1/jugadores', function (req, res) {
            res.send('peticion de tipo POST (Para Insertar)')
        })
          
        this.app.put('/avanzada/v1/jugadores/id', function (req, res) {
            res.send('peticion de tipo PUT (Para editar)')
        })
          
        this.app.delete('/avanzada/v1/jugadores/id', function (req, res) {
            res.send('peticion de tipo DELETE (Para eliminar)')
        })

    }

    conectarConBD(){

    }

}

module.exports=ServidorModelo