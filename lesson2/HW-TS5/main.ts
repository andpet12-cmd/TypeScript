function asd(y:number, z:number, ...x:(number | boolean)[]):void {
    console.log(x);
    console.log(Array.isArray(x));

}

asd(1, 2, 3, 4, 5, true);