function renderMenu() {
    let menuCard = document.getElementById("menus");
    menuCard.innerHTML = "";
    for (let i = 0; i < myDishes.length; i++) {
        menuCard.innerHTML += TemplateMenuCard(i);
    }
}

function TemplateMenuCard(i) {
    return `<div id="menuCard">
                <h4 id="name">${myDishes[i].name}</h4>
                <p id="description">${myDishes[i].description}</p>
                <div id="priceSection">
                    <p id="price">${myDishes[i].price.toFixed(2)} €</p>
                    <button onclick="${addToBasket(i)}" id="addButton">+</button>
                </div>
            </div>`
}

function addToBasket() {

}