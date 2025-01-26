let menus = ["Sushi", "Rahmen", "Okonomiyaki", "Onigiri", "Mochi"]

let prices = [3.99, 7.99, 10.99, 8.99, 5.69]

let amount = [1, 1, 1, 2, 3]


function getValueFromInput(id) {
    let inputVal = document.getElementById(id).value;
    return inputVal;
}

function getMenuFromInput() {
    let menuVal = getValueFromInput("menu");
    return menuVal.trim();
}

function getPriceFromInput() {
    let priceVal = getValueFromInput("price");
    return parseFloat(priceVal);
}

function onAddMenu() {
    let menuValue = getMenuFromInput();
    let priceValue = getPriceFromInput();
    let menuIndex = getMenuIndex(menuValue);
    if (menuIndex == -1) {
        menus.push(menuValue);
        prices.push(priceValue);
        amount.push(1);
    } else {
        amount[menuIndex]++
    }
    console.log(menus);
    console.log(prices);
    console.log(amount);
}

function getMenuIndex(menu) {
    return menus.indexOf(menu);
}