interface FoobarData {
    text: string;
    counter: number;
}

function foobar(data: FoobarData): void {
    console.log('text:', data.text, 'counter:', data.counter);
    document.write('<ul>');
    for (let i: number = 0; i < data.counter; i++) {
        document.write(`<li>${data.text}</li>`);
    }
    document.write('</ul>');
}

const data: FoobarData = {
    text: 'Okten',
    counter: 10,
}

foobar(data);
