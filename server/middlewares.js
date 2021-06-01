const usuariosHandler = require('./usuarios_handler.js');

async function validarUsuario(req, res, next) {
    let usuariosArray = await usuariosHandler.autenticarUsuario(req.body.usuario, req.body.contrasenia);
    if (usuariosArray.length === 0) {
        res.status(403).send({error: 'Usuario y/o contraseña invalido'});
    }
    next();
}

module.exports = {validarUsuario};