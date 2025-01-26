let foods = [];

let prices = [];

let amounts = [];


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
    document.getElementById("orderedFood").innerHTML += basketTemplate(i);
    let food = myDishes[i].name;
    foods.unshift(food);
    let price = myDishes[i].price;
    prices.unshift(price);
    let amount = myDishes[i].amount++;
    amounts.unshift(amount);
    console.log(foods);
    console.log(prices);
    console.log(amounts);
}

function basketTemplate(i) {
    return `<div class="orderedFood" >
                <h4>${myDishes[i].name}</h4>
                <div class="amountSection">
                    <p>${myDishes[i].amount}x</p>
                    <p>${myDishes[i].price.toFixed(2)} €</p>
                </div>
                <div class="buttonSection">
                    <button class="basketButton">-</button>
                    <button class="basketButton">+</button>
                </div>  
            </div>`
}



