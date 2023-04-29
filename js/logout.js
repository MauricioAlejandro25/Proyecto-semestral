function desconectar() {
    localStorage.removeItem('usuario')
    localStorage.removeItem('tipo_usuario')

    window.location = 'inicio.html'
}

const btn_desconectar = document.getElementById('btn-desconectar')
const btn_login_administrador = document.getElementById('btn-login-administrador')
const btn_administrar = document.getElementById('btn-administrar')
const btn_usuario = document.getElementById('btn-usuario')
const btn_login = document.getElementById('btn-login')


const ha_iniciado_sesion = localStorage.getItem('usuario')

if (ha_iniciado_sesion) {
    btn_login_administrador.classList.remove('d-block')
    btn_login_administrador.classList.add('d-none')
    btn_desconectar.classList.remove('d-none')
    btn_desconectar.classList.add('d-block')
    btn_usuario.classList.remove('d-none')
    btn_usuario.classList.add('d-block')
    btn_login.classList.remove('d-block')
    btn_login.classList.add('d-none')

    const tipo_usuario = localStorage.getItem('tipo_usuario')

    if (tipo_usuario == 'admin') {
        btn_administrar.classList.remove('d-none')
        btn_administrar.classList.add('d-block')
    } else {
        btn_administrar.classList.remove('d-block')
        btn_administrar.classList.add('d-none')
    }

} else {
    btn_desconectar.classList.remove('d-block')
    btn_administrar.classList.remove('d-block')
    btn_usuario.classList.remove('d-block')
}


btn_desconectar.addEventListener('click', desconectar)