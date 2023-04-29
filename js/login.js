const formulario_login = document.getElementById('formulario-login');
const inputs_login = document.querySelectorAll('#formulario-login input');

const reglas = {
    usuario: '',
    password: ''
}

const campos = {
    usuario: false,
    password: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(reglas.usuario, e.target, 'usuario');
            break;
        case "password":
            validarCampo(reglas.password, e.target, 'password');
            break;
    }
}

const validarCampo = (regla, input, campo) => {
    if (input.value != regla) {
        document.getElementById(campo).classList.add('is-valid')
		document.getElementById(campo).classList.remove('is-invalid')
        campos[campo] = true;
    } else {
        document.getElementById(campo).classList.add('is-invalid')
		document.getElementById(campo).classList.remove('is-valid')
        campos[campo] = false;
    }
}

inputs_login.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

const btn_iniciar_sesion = document.getElementById('btn-iniciar-sesion')

btn_iniciar_sesion.addEventListener('click', validarFormulario);


formulario_login.addEventListener('submit', (e) => {
    e.preventDefault()

    if (campos.usuario && campos.password) {

        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;

        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

        const usuarios_registrados = JSON.parse(localStorage.getItem('usuarios_registrados')) || []

        // Verificar solo si hay usuarios registrados
        if (usuarios_registrados.length != 0) {

            const usuario_existe = usuarios_registrados.find(usuario_registrado => usuario_registrado.usuario == usuario && usuario_registrado.password == password)

            if (usuario_existe) {
                localStorage.setItem('usuario_logeado', JSON.stringify(usuario_existe))

                document.getElementById('formulario__mensaje_credenciales').classList.remove('formulario__mensaje-activo');

                document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

                let tiempo_redireccion = 5 // expresado en segundos

                localStorage.setItem('usuario', usuario)

                localStorage.removeItem('tipo_usuario')
                localStorage.setItem('tipo_usuario', 'usuario')

                setInterval(() => {
                    document.getElementById('tiempo_redireccion').innerHTML = tiempo_redireccion
                    tiempo_redireccion--
                }, 1000)

                setTimeout(() => {
                    document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');

                    window.location.href = 'inicio.html'
                }, tiempo_redireccion * 1000 + 1000);
            } else {
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto')
                document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto')
                document.getElementById('formulario__mensaje_credenciales').classList.add('formulario__mensaje-activo');
            }
        }

        formulario_login.reset();

    } else {
        document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto')
        document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto')
        document.getElementById('formulario__mensaje_credenciales').classList.remove('formulario__mensaje-activo');
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }

});