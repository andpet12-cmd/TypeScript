function foobar(data) {
    console.log('text:', data.text, 'counter:', data.counter);
    document.write('<ul>');
    for (var i = 0; i < data.counter; i++) {
        document.write("<li>".concat(data.text, "</li>"));
    }
    document.write('</ul>');
}
var data = {
    text: 'Okten',
    counter: 10,
};
foobar(data);
