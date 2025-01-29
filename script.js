let foods = [];

let amounts = [];

let prices = [];

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
    let foodIndex = getIndex(myDishes[i].name);
    if (foodIndex == -1) {
        pushToBasket(i);
        renderBasket(i);
    } else {
        amounts[i]++;
        renderBasket(i)
    }
    console.log(foods);
    console.log(amounts);
}

function getIndex(foodInput) {
    return foods.indexOf(foodInput);
}

function pushToBasket(i) {
    let food = myDishes[i].name;
    let amount = myDishes[i].amount;
    let price = myDishes[i].price;
    foods.push(food)
    amounts.push(amount)
    prices.push(price)
}

function renderBasket() {
    let basket = document.getElementById("orderedFood");
    basket.innerHTML = "";
    for (let j = 0; j < foods.length; j++) {
        basket.innerHTML += basketTemplate(j);
    }
}

function basketTemplate(j) {
    return `<div class="orderedFood" >
                <h4>${foods[j]}</h4>
                <div class="amountSection">
                    <p id="amount">${amounts[j]}x</p>
                    <p>${prices[j].toFixed(2)} €</p>
                </div>
                <div class="buttonSection">
                    <button class="basketButton">-</button>
                    <button class="basketButton">+</button>
                </div>  
            </div>`
}