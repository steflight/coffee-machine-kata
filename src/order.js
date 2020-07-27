let drinkList = ['tea', 'chocolate', 'coffee'];

function createOrder(order) {

    let stick = (order.sugar > 0) ? 1 : 0;
    let message = '';

    try {
        message = `Drink maker makes 1 ${drinkExist(order.drink)} with ${quantiteSucre(order.sugar)} ${plurielSugar(order.sugar)} and ${stick} stick`;
    } catch (e) {
        message = e;
    }
    return message;
}

function drinkExist(drink) {
    if (drink === '' || undefined || null || !drinkList.includes(drink) ) {
        throw 'Attention! vous devez entrer un type de boisson supporté par cette Machine (coffee / tea / chocolate)';
    } else {
      return drink;
    }
}

function quantiteSucre(quantiteSucre) {
    if (quantiteSucre === undefined) {
        return 0;
    } else if (quantiteSucre < 0) {
        throw 'Quantité invalide';
    } else {
        return quantiteSucre;
    }
}

function plurielSugar(quantiteSucre) {
    return quantiteSucre <= 1 ? 'sugar' : 'sugars';
}

console.log(createOrder({ drink: 'chocolte', sugar: undefined }));
