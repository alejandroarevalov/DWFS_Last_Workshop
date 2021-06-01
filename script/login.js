const SERVER = 'http://127.0.0.1:3000';

async function registrarUsuario() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let info = {nombre, apellido, email};

    let response = await fetch(`${SERVER}/registro`, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json'
        }
    });
    let json = await response.json();
    console.log(json);
}

async function autenticarUsuario() {
    let usuario = document.getElementById ('usuario').value;
    let contrasenia = document.getElementById ('contrasenia').value;
    let ingreso = {usuario, contrasenia};

    let response = await fetch (`${SERVER}/login`, {
        method: 'POST',
        body: JSON.stringify(ingreso),
        headers: {
            'content-type': 'application/json'
        }
    });
    let json = await response.json();
    console.log(json);
}


let botonRegistro = document.getElementById('btn-login');
botonRegistro.addEventListener('click', autenticarUsuario);
let botonIngresar = document.getElementById('btn-registro');
botonIngresar.addEventListener('click', registrarUsuario);
