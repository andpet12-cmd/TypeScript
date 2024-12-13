function foobar(text, counter) {
    console.log('text:', text, 'counter:', counter);
    document.write('<ul>');
    for (var i = 0; i < counter; i++) {
        document.write("<li>".concat(text, "</li>"));
    }
    document.write('</ul>');
}
foobar('okten', 10);
