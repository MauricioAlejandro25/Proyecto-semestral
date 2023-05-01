let carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : []

function agregarAlCarrito(producto) {
    carrito.push(producto)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    location.reload();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    location.reload();
}

function cantidadProductos() {
    return carrito.length;
}

function total() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    return total;
}