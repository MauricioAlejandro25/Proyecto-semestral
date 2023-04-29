const admin = {
    usuario: 'admin',
    password: 'admin'
}



const formulario_admin = document.getElementById('formulario-admin-login');

formulario_admin.addEventListener('submit', (e) => {

    e.preventDefault()

    const usuario = document.getElementById('user_admin').value;
    const password = document.getElementById('password_admin').value;

    if (usuario == admin.usuario && password == admin.password) {
        window.location.href = 'admin.html'

        localStorage.setItem('usuario', usuario)

        localStorage.removeItem('tipo_usuario')
        localStorage.setItem('tipo_usuario', 'admin')
    } else {
        document.getElementById('user_admin').classList.add('is-invalid')
        document.getElementById('password_admin').classList.add('is-invalid')
    }
})