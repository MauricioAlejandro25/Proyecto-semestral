const formulario_marcas = document.getElementById('formulario-marcas');

const marca_1_input_imagen = document.getElementById('formFile_marca_1')
const marca_2_input_imagen = document.getElementById('formFile_marca_2')
const marca_3_input_imagen = document.getElementById('formFile_marca_3')
const marca_4_input_imagen = document.getElementById('formFile_marca_4')
const marca_5_input_imagen = document.getElementById('formFile_marca_5')
const marca_6_input_imagen = document.getElementById('formFile_marca_6')
const marca_7_input_imagen = document.getElementById('formFile_marca_7')
const marca_8_input_imagen = document.getElementById('formFile_marca_8')
const marca_9_input_imagen = document.getElementById('formFile_marca_9')
const marca_10_input_imagen = document.getElementById('formFile_marca_10')
const marca_11_input_imagen = document.getElementById('formFile_marca_11')
const marca_12_input_imagen = document.getElementById('formFile_marca_12')

// add event listener on change
/*
 as the following code
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
*/

marca_1_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_1');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_1');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_1_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
});

marca_2_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_2');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_2');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_2_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
});

marca_3_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_3');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_3');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_3_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
}
);

marca_4_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_4');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_4');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_4_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
});

marca_5_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_5');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_5');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_5_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
}
);

marca_6_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_6');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_6');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_6_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
}
);

marca_7_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_7');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_7');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_7_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
})

marca_8_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_8');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_8');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_8_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
}
);

marca_9_input_imagen.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {
        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_9');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_9');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_9_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
}
);

marca_10_input_imagen.addEventListener('change', (e) => {

    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {

        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_10');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_10');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_10_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
}
);

marca_11_input_imagen.addEventListener('change', (e) => {

    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {

        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_11');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_11');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_11_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
}
);

marca_12_input_imagen.addEventListener('change', (e) => {

    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e) => {

        const fileURL = e.target.result;

        // Mostrar imagen
        const imagen = document.getElementById('imagen_marca_12');
        imagen.classList.add('imagen-vista-previa');
        imagen.src = fileURL;

        // Mostrar botón de eliminar imagen
        const botonEliminarImagen = document.getElementById('boton-eliminar-imagen_marca_12');
        botonEliminarImagen.classList.remove('d-none');

        // eliminar imagen
        botonEliminarImagen.addEventListener('click', () => {
            imagen.classList.remove('imagen-vista-previa');
            imagen.src = '';
            marca_12_input_imagen.value = '';
            botonEliminarImagen.classList.add('d-none');
        })
    });
}
);

