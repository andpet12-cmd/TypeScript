function sum(arr) {
    var basket = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        basket = basket + item;
    }
    return basket;
}
console.log(sum([1, 2, 10]));
