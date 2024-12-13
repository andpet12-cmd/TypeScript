function foobar(arrayOfPrimitives) {
    document.write("<ul>");
    for (var _i = 0, arrayOfPrimitives_1 = arrayOfPrimitives; _i < arrayOfPrimitives_1.length; _i++) {
        var item = arrayOfPrimitives_1[_i];
        document.write("<li>".concat(item, "</li>"));
    }
    document.write("</ul>");
}
foobar([1122, 123, 1234, 456, 25, 3, 'hello', true]);
