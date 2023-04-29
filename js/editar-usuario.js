const formulario_informacion_personal = document.getElementById('formulario-informacion-personal');

const reglas = {
    correo:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^[0-9]{8}$/
}

const campos = {
    nombre: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "correo":
            validarCampo(reglas.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(reglas.telefono, e.target, 'telefono');
            break;
    }
}

const validarCampo = (regla, input, campo) => {
    if (regla.test(input.value)) {
        document.getElementById(`${campo}_nuevo`).classList.remove('is-invalid');
        document.getElementById(`${campo}_nuevo`).classList.add('is-valid');
        campos[campo] = true;
    } else {
        document.getElementById(`${campo}_nuevo`).classList.remove('is-valid');
        document.getElementById(`${campo}_nuevo`).classList.add('is-invalid');
        campos[campo] = false;
    }
}

inputs = document.querySelectorAll('#formulario-informacion-personal input');

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


const nombre_nuevo = document.getElementById('nombre_nuevo');
const correo_nuevo = document.getElementById('correo_nuevo');
const telefono_nuevo = document.getElementById('telefono_nuevo');

nombre_nuevo.placeholder = JSON.parse(localStorage.getItem('usuario_logeado')).nombre;
correo_nuevo.placeholder = JSON.parse(localStorage.getItem('usuario_logeado')).correo;
telefono_nuevo.placeholder = JSON.parse(localStorage.getItem('usuario_logeado')).telefono;

formulario_informacion_personal.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = nombre_nuevo.value;
    const correo = correo_nuevo.value;
    const telefono = telefono_nuevo.value;

    let usuario_logeado = JSON.parse(localStorage.getItem('usuario_logeado'));

    if(campos.correo || campos.telefono){
        usuario_logeado.nombre = nombre || usuario_logeado.nombre;
        usuario_logeado.correo = correo || usuario_logeado.correo;
        usuario_logeado.telefono = telefono || usuario_logeado.telefono;


        localStorage.setItem('usuario_logeado', JSON.stringify(usuario_logeado));
    }
});



