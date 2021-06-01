const express = require('express');
const cors = require('cors');
const usuariosHandler = require('./usuarios_handler.js');
const middlewares = require('./middlewares.js')
const server = express();

server.use(express.json()); //body parser
server.use(cors());

server.get('/usuarios', (req, res) => {
   res.status(200).send('OK'); 
});

server.post('/login', middlewares.validarUsuario, async (req, res) => {
    res.status(200).send({message:"Usuario validado"});
});

server.post('/registro', async (req, res) => {
    console.log(req.body);
    const user = {nombre, apellido, email} = req.body;
    console.log(`${nombre} - ${apellido} - ${email}`);
    usuariosHandler.registrarUsuario(user)
    res.status(201).send({message: 'Usuario creado satisfactoriamente'});
})

server.listen(3000, () => {
    console.log('Servidor en ejecucion');
});

server.use((err, req, res, next) => {
    if (err) {
        console.error(err);
        res.status(500).send(err);
    }
    next();
})
