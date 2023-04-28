//parámetro pasado desde el botón (parámetro igual que categoría)
function filterProduct(value) {
    //Código de clase de botón
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //comprobar si el valor es igual a texto interior
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    //seleccionar todas las tarjetas
    let elements = document.querySelectorAll(".card");
    //recorrer todas las tarjetas
    elements.forEach((element) => {
        //mostrar todas las tarjetas al hacer clic en el botón 'todas'
        if (value == "Todo") {
            element.classList.remove("hide");
        } else {
            //Comprobar si el elemento contiene una clase de categoría
            if (element.classList.contains(value)) {
                //elemento de visualización basado en la categoría
                element.classList.remove("hide");
            } else {
                //ocultar otros elementos
                element.classList.add("hide");
            }
        }
    });
}
//Haga clic en el botón de búsqueda
document.getElementById("search").addEventListener("click", () => {
    //inicializaciones
    let searchInput = document.getElementById("search-input").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    //recorrer todas las tarjetas
    cards.forEach((card) => {
        let productName = card.querySelector(".product-name").innerText.toLowerCase();
        let productDescription = card.querySelector(".precio").innerText.toLowerCase();
        let productPrice = card.querySelector(".precio").innerText.toLowerCase();

        //comprobar si alguna propiedad incluye el valor de búsqueda
        if (productName.includes(searchInput) ||
            productDescription.includes(searchInput) ||
            productPrice.includes(searchInput)) {
            //mostar las card que se busca
            card.classList.remove("hide");
        } else {
            //Ocultar a otros
            card.classList.add("hide");
        }
    });
});
//Mostrar inicialmente todos los productos
window.onload = () => {
    filterProduct("Todo");
};

