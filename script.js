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
                    <p id="price">${myDishes[i].price.toFixed(2).replace(".", ",")} €</p>
                    <button onclick="addToBasket(${i})" id="addButton">+</button>
                </div>
            </div>`
}

function addToBasket(i) {
    let foodIndex = getIndex(myDishes[i].name);
    if (foodIndex == -1) {
        pushToBasket(i);
    } else {
        amounts[foodIndex]++;
    }
    renderBasket();
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
    calcResult();
}

function basketTemplate(j) {
    return `<div class="renderedFood" id="renderedFood${j}" >
                <h4>${foods[j]}</h4>
                <div class="amountSection">
                    <p id="amount">${amounts[j]}x</p>
                    <p id="priceBasket${j}">${(prices[j] * amounts[j]).toFixed(2).replace(".", ",")} €</p>
                </div>
                <div class="buttonSection">
                    <button onclick="decreaseAmount(${j})" class="basketButton">-</button>
                    <button onclick="increaseAmount(${j})" class="basketButton">+</button>
                </div>  
            </div>`
}

function increaseAmount(j) {
    amounts[j]++;
    renderBasket();
}

function decreaseAmount(j) {
    if (amounts[j] > 1) {
        amounts[j]--;
    } else {
        foods.splice(j, 1);
        prices.splice(j, 1);
        amounts.splice(j, 1);
    }
    renderBasket();
}

function calcResult() {
    let totalResult = document.getElementById("totalResult");
    totalResult.innerHTML = "";
    let result = 0;
    for (let k = 0; k < foods.length; k++) {
        result += prices[k] * amounts[k];
    }
    totalResult.innerHTML = `${result.toFixed(2).replace(".", ",")} €`;
}

function toggleBasket() {
    let basketWrapper = document.getElementById("basketWrapper");
    basketWrapper.classList.toggle("hidden");
}

document.querySelector(".orderButtonContent").addEventListener("click", toggleBasket);