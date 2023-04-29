const formulario_favoritos = document.getElementById('formulario_favoritos');

const reglas = {
    precio: /^(?!0)\d{1,6}$|^1000000$/
}

const campos = {
    precio_favorito_1: false,
    precio_favorito_2: false,
    precio_favorito_3: false,
    precio_favorito_4: false
}

// FAVORITO 1
const favorito_1_input_titulo = document.getElementById('favorito_1_input_titulo');
const favorito_1_input_descripcion = document.getElementById('favorito_1_input_descripcion');
const favorito_1_input_precio = document.getElementById('favorito_1_input_precio');
const favorito_1_input_imagen = document.getElementById('formFile_favorito_1');

favorito_1_input_titulo.placeholder = JSON.parse(localStorage.getItem('favorito_1')).nombre || 'JORDAN';
favorito_1_input_descripcion.placeholder = JSON.parse(localStorage.getItem('favorito_1')).descripcion || 'AIR JORDAN 1 MID SE';
favorito_1_input_precio.placeholder = JSON.parse(localStorage.getItem('favorito_1')).precio || '142000';

// FAVORITO 2
const favorito_2_input_titulo = document.getElementById('favorito_2_input_titulo');
const favorito_2_input_descripcion = document.getElementById('favorito_2_input_descripcion');
const favorito_2_input_precio = document.getElementById('favorito_2_input_precio');
const favorito_2_input_imagen = document.getElementById('formFile_favorito_2');

favorito_2_input_titulo.placeholder = JSON.parse(localStorage.getItem('favorito_2')).nombre || 'PUMA';
favorito_2_input_descripcion.placeholder = JSON.parse(localStorage.getItem('favorito_2')).descripcion || 'T7 HOODIE DK';
favorito_2_input_precio.placeholder = JSON.parse(localStorage.getItem('favorito_2')).precio || '52000';

// FAVORITO 3
const favorito_3_input_titulo = document.getElementById('favorito_3_input_titulo');
const favorito_3_input_descripcion = document.getElementById('favorito_3_input_descripcion');
const favorito_3_input_precio = document.getElementById('favorito_3_input_precio');
const favorito_3_input_imagen = document.getElementById('formFile_favorito_3');

favorito_3_input_titulo.placeholder = JSON.parse(localStorage.getItem('favorito_3')).nombre || 'ADIDAS';
favorito_3_input_descripcion.placeholder = JSON.parse(localStorage.getItem('favorito_3')).descripcion || 'ZAPATILLA ADIDAS DROP STEP';
favorito_3_input_precio.placeholder = JSON.parse(localStorage.getItem('favorito_3')).precio || '89990';

// FAVORITO 4
const favorito_4_input_titulo = document.getElementById('favorito_4_input_titulo');
const favorito_4_input_descripcion = document.getElementById('favorito_4_input_descripcion');
const favorito_4_input_precio = document.getElementById('favorito_4_input_precio');
const favorito_4_input_imagen = document.getElementById('formFile_favorito_4');

favorito_4_input_titulo.placeholder = JSON.parse(localStorage.getItem('favorito_4')).nombre || 'VANS';
favorito_4_input_descripcion.placeholder = JSON.parse(localStorage.getItem('favorito_4')).descripcion || 'VANS UA SK8-LOW';
favorito_4_input_precio.placeholder = JSON.parse(localStorage.getItem('favorito_4')).precio || '59990';


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "precio_favorito_1":
            if (reglas.precio.test(e.target.value)) {
                document.getElementById('favorito_1_input_precio').classList.remove('is-invalid');
                document.getElementById('favorito_1_input_precio').classList.add('is-valid');
                campos['precio_favorito_1'] = true;
            } else {
                document.getElementById('favorito_1_input_precio').classList.add('is-invalid');
                document.getElementById('favorito_1_input_precio').classList.remove('is-valid');
                campos['precio_favorito_1'] = false;
            }
            break;
        case "precio_favorito_2":
            if (reglas.precio.test(e.target.value)) {
                document.getElementById('favorito_2_input_precio').classList.remove('is-invalid');
                document.getElementById('favorito_2_input_precio').classList.add('is-valid');
                campos['precio_favorito_2'] = true;
            } else {
                document.getElementById('favorito_2_input_precio').classList.add('is-invalid');
                document.getElementById('favorito_2_input_precio').classList.remove('is-valid');
                campos['precio_favorito_2'] = false;
            }
            break;
        case "precio_favorito_3":
            if (reglas.precio.test(e.target.value)) {
                document.getElementById('favorito_3_input_precio').classList.remove('is-invalid');
                document.getElementById('favorito_3_input_precio').classList.add('is-valid');
                campos['precio_favorito_3'] = true;
            } else {
                document.getElementById('favorito_3_input_precio').classList.add('is-invalid');
                document.getElementById('favorito_3_input_precio').classList.remove('is-valid');
                campos['precio_favorito_3'] = false;
            }
            break;
        case "precio_favorito_4":
            if (reglas.precio.test(e.target.value)) {
                document.getElementById('favorito_4_input_precio').classList.remove('is-invalid');
                document.getElementById('favorito_4_input_precio').classList.add('is-valid');
                campos['precio_favorito_4'] = true;
            } else {
                document.getElementById('favorito_4_input_precio').classList.add('is-invalid');
                document.getElementById('favorito_4_input_precio').classList.remove('is-valid');
                campos['precio_favorito_4'] = false;
            }
            break;
    }
}

inputs = document.querySelectorAll('#formulario_favoritos input.precio');

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

favorito_1_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;
            // Mostrar imagen
            const imagen = document.getElementById('imagen_favorito_1');
            imagen.classList.add('imagen-vista-previa');
            imagen.src = fileURL;
    
            // Mostrar botón de eliminar imagen
            const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_favorito_1');
            botonEliminarImagen.classList.remove('d-none');
    
            // eliminar imagen
            botonEliminarImagen.addEventListener('click', () => {
                imagen.classList.remove('imagen-vista-previa');
                imagen.src = '';
                favorito_1_input_imagen.value = '';
                botonEliminarImagen.classList.add('d-none');
            })
    });
});

favorito_2_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_favorito_2');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_favorito_2');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            favorito_2_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
});

favorito_3_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_favorito_3');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_favorito_3');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            favorito_3_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
});

favorito_4_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);


    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_favorito_4');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_favorito_4');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            favorito_4_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
});




formulario_favoritos.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.precio_favorito_1) {
        localStorage.setItem('favorito_1',
            JSON.stringify({
                nombre: favorito_1_input_titulo.value || favorito_1_input_titulo.placeholder,
                descripcion: favorito_1_input_descripcion.value || favorito_1_input_descripcion.placeholder,
                precio: favorito_1_input_precio.value || favorito_1_input_precio.placeholder,
            }));
    }

    if (campos.precio_favorito_2) {
        localStorage.setItem('favorito_2',
            JSON.stringify({
                nombre: favorito_2_input_titulo.value || favorito_2_input_titulo.placeholder,
                descripcion: favorito_2_input_descripcion.value || favorito_2_input_descripcion.placeholder,
                precio: favorito_2_input_precio.value || favorito_2_input_precio.placeholder,
            }));
    }

    if(campos.precio_favorito_3) {
        localStorage.setItem('favorito_3',
            JSON.stringify({
                nombre: favorito_3_input_titulo.value || favorito_3_input_titulo.placeholder,
                descripcion: favorito_3_input_descripcion.value || favorito_3_input_descripcion.placeholder,
                precio: favorito_3_input_precio.value || favorito_3_input_precio.placeholder,
            }));
    }

    if(campos.precio_favorito_4) {
        localStorage.setItem('favorito_4',
            JSON.stringify({
                nombre: favorito_4_input_titulo.value || favorito_4_input_titulo.placeholder,
                descripcion: favorito_4_input_descripcion.value || favorito_4_input_descripcion.placeholder,
                precio: favorito_4_input_precio.value || favorito_4_input_precio.placeholder,
            }));
    }
});