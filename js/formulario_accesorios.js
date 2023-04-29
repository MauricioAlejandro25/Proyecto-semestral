const formulario_accesorios = document.getElementById('formulario-accesorios');
const inputs = document.querySelectorAll('#formulario-accesorios input');

const reglas = {
    accesorio_1_input_titulo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    accesorio_2_input_titulo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    accesorio_3_input_titulo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}

const campos = {
    accesorio_1_input_titulo: false,
    accesorio_2_input_titulo: false,
    accesorio_3_input_titulo: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "accesorio_1_input_titulo":
            validarCampo(reglas.accesorio_1_input_titulo, e.target, 'accesorio_1_input_titulo');
            break;
        case "accesorio_2_input_titulo":
            validarCampo(reglas.accesorio_2_input_titulo, e.target, 'accesorio_2_input_titulo');
            break;
        case "accesorio_3_input_titulo":
            validarCampo(reglas.accesorio_3_input_titulo, e.target, 'accesorio_3_input_titulo');
            break;
    }
}

const validarCampo = (regla, input, campo) => {
    if (regla.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

const accesorio_1_input_titulo = document.getElementById('accesorio_1_input_titulo');
const accesorio_2_input_titulo = document.getElementById('accesorio_2_input_titulo');
const accesorio_3_input_titulo = document.getElementById('accesorio_3_input_titulo');

// formFile
const accesorio_1_input_imagen = document.getElementById('formFile_accesorio_1');
const accesorio_2_input_imagen = document.getElementById('formFile_accesorio_2');
const accesorio_3_input_imagen = document.getElementById('formFile_accesorio_3');

accesorio_1_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_accesorio_1');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_accesorio_1');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            accesorio_1_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
});

accesorio_2_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_accesorio_2');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_accesorio_2');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            accesorio_2_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
});

accesorio_3_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_accesorio_3');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;
        
        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_accesorio_3');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            accesorio_3_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
});


accesorio_1_input_titulo.placeholder = localStorage.getItem('accesorio_1') || 'GORROS';
accesorio_2_input_titulo.placeholder = localStorage.getItem('accesorio_2') || 'CALCETAS';
accesorio_3_input_titulo.placeholder = localStorage.getItem('accesorio_3') || 'MOCHILAS';

formulario_accesorios.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('accesorio_1', accesorio_1_input_titulo.value || accesorio_1_input_titulo.placeholder);
    localStorage.setItem('accesorio_2', accesorio_2_input_titulo.value || accesorio_2_input_titulo.placeholder);
    localStorage.setItem('accesorio_3', accesorio_3_input_titulo.value || accesorio_3_input_titulo.placeholder);
});