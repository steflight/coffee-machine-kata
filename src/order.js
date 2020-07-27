let order = {
    type: '',
    sugar: 0,
    stick: 0
};

let listeBoissons = ['tea', 'chocolate', 'coffee'];

function createOrder(commande) {

    let stick = (commande.sugar > 0) ? 1 : 0;
    let message = '';

    try {
        message = `Drink maker makes 1 ${boissonExist(commande.typeBoisson)} with ${quantiteSucre(commande.sugar)} ${plurielSugar(commande.sugar)} and ${stick} stick`;
    } catch (e) {
        message = e;
    }
    return message;
}

function boissonExist(typeBoisson) {
    if (typeBoisson === '' || undefined || null || !listeBoissons.includes(typeBoisson) ) {
        throw 'Attention! vous devez entrer un type de boisson supporté par cette Machine (coffee / tea / chocolate)';
    } else {
      return typeBoisson;
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

console.log(createOrder({ typeBoisson: 'chocolate', sugar: undefined }));
