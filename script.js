let foods = [];

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
                    <button onclick="addToBasket(${i})" id="addButton">+</button>
                </div>
            </div>`
}

function addToBasket(i) {
    let food = myDishes[i].name;
    let amount = myDishes[i].amount;
    let foodIndex = getIndex(food);
    if (foodIndex == -1) {
        foods.unshift(food);
        amount++;
        document.getElementById("orderedFood").innerHTML += basketTemplate(i);
    } else {
        amount++;
    }
}

function getIndex(foodInput) {
    return foods.indexOf(foodInput);
}

function basketTemplate(i) {
    return `<div class="orderedFood" >
                <h4>${myDishes[i].name}</h4>
                <div class="amountSection">
                    <p id="amount">${myDishes[i].amount}x</p>
                    <p>${myDishes[i].price.toFixed(2)} €</p>
                </div>
                <div class="buttonSection">
                    <button class="basketButton">-</button>
                    <button class="basketButton">+</button>
                </div>  
            </div>`
}