const formulario_registro = document.getElementById('formulario-registro');
const inputs_registro = document.querySelectorAll('#formulario-registro input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^[0-9]{8}$/
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
			break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(campo).classList.add('is-valid')
		document.getElementById(campo).classList.remove('is-invalid')
		campos[campo] = true;
	} else {
		document.getElementById(campo).classList.add('is-invalid')
		document.getElementById(campo).classList.remove('is-valid')
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value === inputPassword2.value) {
		document.getElementById('password2').classList.add('is-valid')
		document.getElementById('password2').classList.remove('is-invalid')
		campos['password2'] = false;
	} else {
		document.getElementById('password2').classList.add('is-invalid')
		document.getElementById('password2').classList.remove('is-valid')
		campos['password2'] = true;
	}
}

inputs_registro.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario_registro.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {

		const usuario = document.getElementById('usuario').value;
		const nombre = document.getElementById('nombre').value;
		const password = document.getElementById('password').value;
		const correo = document.getElementById('correo').value;
		const telefono = document.getElementById('telefono').value;

		const usuario_registrado = {
			usuario,
			nombre,
			password,
			correo,
			telefono
		};

		const usuarios_registrados = JSON.parse(localStorage.getItem('usuarios_registrados')) || [];

		usuarios_registrados.push(usuario_registrado);

		localStorage.setItem('usuarios_registrados', JSON.stringify(usuarios_registrados));

		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
			window.location = 'Login.html'
		}, 5000);

		formulario_registro.reset();
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

