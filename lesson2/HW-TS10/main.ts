function foobar(arrayOfPrimitives: (number | string | boolean)[]): void {
    document.write(`<ul>`);
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

foobar([1122, 123, 1234, 456, 25, 3, 'hello', true]);