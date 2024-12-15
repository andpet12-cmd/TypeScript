interface TextData {
    original: string;
    transformed: string;
}

const transformText = (data: TextData): void => {
    data.transformed = data.original.toLowerCase();
    console.log(data.transformed);
}
let textData: TextData = {
    original: 'HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL',
    transformed: '',
};

transformText(textData);