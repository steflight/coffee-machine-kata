let priceList = new Map([
    ['tea', 0.4],
    ['chocolate', 0.5],
    ['coffee', 0.6]
  ]);

function createMyOrder (order, amount) {
    let message = '';

    // check if drink exists
    if (drinkExists(order.drink)) {
        // check if the amount provided is valid
        if (isAmountEnough(order.drink, amount)) {
            // amount enough
            let stick = (order.sugar > 0) ? 1 : 0;
            message = `Drink maker makes 1 ${order.drink} with ${sugarQuantity(order.sugar)} ${pluralSugar(order.sugar)} and ${stick} stick`;
            message += "\r\n";
            message += 'Amount of money is correct the drink maker is making your drink :)';
        } else {
            // insufficient amount
            let complement = (priceList.get(order.drink) - (amount > 0 ? amount : 0)).toFixed(2);
            message = 'Warning! You must add ' + complement + ' euro for this ' + order.drink + ' drink';
        }
    } else {
        message = 'Warning! vous devez entrer un type de boisson supporté par cette Machine (coffee / tea / chocolate)';
    }

    return message;
}

function drinkExists(drink) {
    return !!drink && priceList.has(drink);
}

function sugarQuantity(numberOfSugar) {
    if (numberOfSugar == undefined) {
        return 0;
    } else if (numberOfSugar < 0) {
        throw 'Please enter a valid quantity of su';
    } else {
        return numberOfSugar;
    }
}

function pluralSugar (numberOfSugar) {
    return numberOfSugar <= 1 ? 'sugar' : 'sugars';
}

function isAmountEnough (drink, amount) {
    return amount >= priceList.get(drink);
}

 console.log(createMyOrder({ drink: 'tea', sugar:2 }, 0.7));

module.exports = {
    "drinkExists": drinkExists,
    "isAmountEnough": isAmountEnough,
    "createMyOrder": createMyOrder,
    "sugarQuantity": sugarQuantity
};

