const formulario_password = document.getElementById('formulario-password');

const reglas_password = {
    // debe tener al menos 4 caracteres hasta 16
    password: /^.{4,16}$/,
}

const campos_password = {
    password_actual: false,
    password_nuevo: false,
    password_nuevo2: false,
}

const password_actual = document.getElementById('password-actual');
const password_nuevo = document.getElementById('password-nuevo');
const password_nuevo2 = document.getElementById('password-nuevo2');



const validarPassword = (e) => {
    switch (e.target.name) {
        case "password_actual":
            validarCampoPassword(reglas_password.password, e.target, 'password-actual');
            validarPasswordActual();
            break;
        case "password_nuevo":
            validarCampoPassword(reglas_password.password, e.target, 'password-nuevo');
            break;
        case "password_nuevo2":
            validarPassword2();
            break;
    }
}

const validarCampoPassword = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(campo).classList.remove('is-invalid');
        document.getElementById(campo).classList.add('is-valid');
        campos_password[input.name] = true;
    } else {
        document.getElementById(campo).classList.add('is-invalid');
        document.getElementById(campo).classList.remove('is-valid');
        campos_password[input.name] = false;
    }
}

const validarPassword2 = () => {
    if (password_nuevo.value !== password_nuevo2.value) {
        document.getElementById('password-nuevo2').classList.add('is-invalid');
        document.getElementById('password-nuevo2').classList.remove('is-valid');
        campos_password['password_nuevo2'] = false;
    } else {
        document.getElementById('password-nuevo2').classList.add('is-valid');
        document.getElementById('password-nuevo2').classList.remove('is-invalid');
        campos_password['password_nuevo2'] = true;
    }
}

const validarPasswordActual = () => {
    const passwordUsuarioLogeado = JSON.parse(localStorage.getItem('usuario_logeado')).password;

    if (password_actual.value !== passwordUsuarioLogeado) {
        document.getElementById('password-actual').classList.add('is-invalid');
        document.getElementById('password-actual').classList.remove('is-valid');
        campos['password_actual'] = false;
    } else {
        document.getElementById('password-actual').classList.add('is-valid');
        document.getElementById('password-actual').classList.remove('is-invalid');
        campos['password_actual'] = true;
    }
}

password_actual.addEventListener('keyup', validarPassword);
password_actual.addEventListener('blur', validarPassword);
password_nuevo.addEventListener('keyup', validarPassword);
password_nuevo.addEventListener('blur', validarPassword);
password_nuevo2.addEventListener('keyup', validarPassword);
password_nuevo2.addEventListener('blur', validarPassword);


formulario_password.addEventListener('submit', (e) => {

    e.preventDefault();

    if (campos_password.password_actual && campos_password.password_nuevo && campos_password.password_nuevo2) {
        const usuario_logeado = JSON.parse(localStorage.getItem('usuario_logeado'));
        const usuarios_registrados = JSON.parse(localStorage.getItem('usuarios_registrados'));

        // find the user in the array of registered users
        const usuario = usuarios_registrados.find(usuario => usuario.usuario === usuario_logeado.usuario);

        // update the password

        usuario.password = password_nuevo.value;

        // update the user in the array of registered users
        usuarios_registrados[usuarios_registrados.indexOf(usuario)] = usuario;

        localStorage.setItem('usuario_logeado', JSON.stringify(usuario_logeado));
        localStorage.setItem('usuarios_registrados', JSON.stringify(usuarios_registrados));
        localStorage.removeItem('usuario_logeado');
        window.location = 'Login.html';
    }

});
