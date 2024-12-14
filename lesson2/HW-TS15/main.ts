interface Currency {
    currency: string;
    value: number;
}

function exchange(sumUAH: number, currencyValues: Currency[], exchangeCurrency: string): number {
    let chosenCurrency: Currency | undefined = undefined;

    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
            break;
        }
    }

    if (!chosenCurrency) {
        throw new Error("Invalid currency");
    }
    const result = sumUAH / chosenCurrency.value
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));