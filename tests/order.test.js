const order = require('../src/order.js');


// test('Création de l object', () => {
//     expect(order.type).toEqual('');
// });

test('Check drink provided', () => {
    expect(order.drinkExists(null)).toBeFalsy();
    expect(order.drinkExists(undefined)).toBeFalsy();
    expect(order.drinkExists('null')).toBeFalsy();
    expect(order.drinkExists('cafe')).toBeFalsy();
    expect(order.drinkExists('cofee')).toBeFalsy();
    expect(order.drinkExists('coffee')).toBe(true);
});

test ('check amount provided', () => {
    expect(order.isAmountEnough('coffee', -1)).toBeFalsy();
    expect(order.isAmountEnough('coffee', 0)).toBeFalsy();
    expect(order.isAmountEnough('coffee', 0.3)).toBeFalsy();
    expect(order.isAmountEnough('coffee', 0.6)).toBeTruthy();
    expect(order.isAmountEnough('coffee', null)).toBe(false);
    expect(order.isAmountEnough('coffee', undefined)).toBe(false);
    expect(order.isAmountEnough('coffee', 1)).toBe(true);
});

test('check quantity of Sugar', () => {
    expect(order.sugarQuantity(undefined)).toBe(0);
    // expect (undefined == undefined).toBe(true);
    expect(order.sugarQuantity(1)).toBe(1);
});

// test ('check if createMyOrder renders the correct message', () => {
//     // expect(order.createMyOrder({ drink: 'cofee', sugar:2 }, 0.3)).toBe('hhhh');
// });
