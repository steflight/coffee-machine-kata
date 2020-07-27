let drinkList = ['tea', 'chocolate', 'coffee'];

function createOrder(order) {

    let stick = (order.sugar > 0) ? 1 : 0;
    let message = '';

    try {
        message = `Drink maker makes 1 ${drinkExist(order.drink)} with ${sugarQuantity(order.sugar)} ${plurielSugar(order.sugar)} and ${stick} stick`;
    } catch (e) {
        message = e;
    }
    return message;
}

function drinkExist(drink) {
    if (drink === '' || undefined || null || !drinkList.includes(drink) ) {
        throw 'Attention! you must enter a type of drink supported by this Machine (coffee / tea / chocolate)';
    } else {
      return drink;
    }
}

function sugarQuantity(numberOfSugar) {
    if (numberOfSugar === undefined) {
        return 0;
    } else if (numberOfSugar < 0) {
        throw 'Please enter a valid quantity of sugar';
    } else {
        return numberOfSugar;
    }
}

function plurielSugar(numberOfSugar) {
    return numberOfSugar <= 1 ? 'sugar' : 'sugars';
}

console.log(createOrder({ drink: 'chocolate', sugar: 2 }));
