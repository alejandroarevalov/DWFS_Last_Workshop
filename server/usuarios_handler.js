const sequelize = require('./ConexionBD.js');

async function registrarUsuario(usuario) {
    await sequelize.query("INSERT INTO personas VALUES (NULL, :nombre, :apellido, :email, 21, '2000-01-01', false)", {
            replacements: {
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email
            },
            type: sequelize.QueryTypes.INSERT
    });
}

async function autenticarUsuario(usuario, contrasenia) {
    let encontrado = await sequelize.query('SELECT * FROM personas WHERE email = :email AND contrasenia = :contrasenia', {
                        replacements: {
                            email: usuario,
                            contrasenia: contrasenia
                        },
                        type: sequelize.QueryTypes.SELECT
    });
    return encontrado;
}



module.exports = { registrarUsuario, autenticarUsuario }