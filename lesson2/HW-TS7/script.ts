function foobar(text: string, counter: number): void {
    console.log('text:', text, 'counter:', counter);
    document.write('<ul>');
    for (let i: number = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

foobar('okten', 10);
