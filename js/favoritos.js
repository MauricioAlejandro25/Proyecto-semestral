// document dom loaded
document.addEventListener('DOMContentLoaded', () => {
    const default_fav_1 =
    {
        nombre: 'JORDAN',
        descripcion: 'AIR JORDAN 1 MID SE',
        precio: '142000',
    }
    
    const default_fav_2 = {
        nombre: 'PUMA',
        descripcion: 'T7 HOODIE DK',
        precio: '52000',
    }
    
    const default_fav_3 = {
        nombre: 'ADIDAS',
        descripcion: 'ZAPATILLA ADIDAS DROP STEP',
        precio: '89990',
    }
    
    const default_fav_4 = {
        nombre: 'VANS',
        descripcion: 'VANS UA SK8-LOW',
        precio: '59990',
    }
    
    
    const favorito_1 = JSON.parse(localStorage.getItem('favorito_1')) || default_fav_1
    const favorito_2 = JSON.parse(localStorage.getItem('favorito_2')) || default_fav_2;
    const favorito_3 = JSON.parse(localStorage.getItem('favorito_3')) || default_fav_3;
    const favorito_4 = JSON.parse(localStorage.getItem('favorito_4')) || default_fav_4;
    
    localStorage.setItem('favorito_1', JSON.stringify(favorito_1));
    localStorage.setItem('favorito_2', JSON.stringify(favorito_2));
    localStorage.setItem('favorito_3', JSON.stringify(favorito_3));
    localStorage.setItem('favorito_4', JSON.stringify(favorito_4));
})
