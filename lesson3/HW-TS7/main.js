function arrayMinValue(numbers) {
    var min = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        var number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(arrayMinValue([99, 11, -123, 22, 33, 44]));
