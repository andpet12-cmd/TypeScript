function exchange(sumUAH, currencyValues, exchangeCurrency) {
    var chosenCurrency = undefined;
    for (var _i = 0, currencyValues_1 = currencyValues; _i < currencyValues_1.length; _i++) {
        var item = currencyValues_1[_i];
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
            break;
        }
    }
    if (!chosenCurrency) {
        throw new Error("Invalid currency");
    }
    var result = sumUAH / chosenCurrency.value;
    return result;
}
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'EUR'));
