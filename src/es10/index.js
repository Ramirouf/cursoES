let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value*2]));

//trim start: deletes whitespace from the beginning of a string
//trim end: deletes whitespace from the end of a string
//trim: deletes whitespace from the beginning and end of a string

let hello = '   hello world';
console.log(hello.trimStart());

let hello2 = 'hello world   ';
console.log(hello2.trimEnd());

let hello3 = '   hello world   ';
console.log(hello3.trim());

//optional catch binding: it's not neccessary to pass an error to a catch block
//It is passed automatically if an error is thrown

//Former way of handling errors
try {
    console.log(s);
} catch (error) {
    console.log(error);
}

//New way of handling errors

try{
    console.log(s);
} catch {
    console.log(error);
}

//Object.fromEntries: converts an array of key-value pairs to an object

let entries = [['name', 'oscar'], ['age', 32]];

console.log(Object.fromEntries(entries));

//Symbol type object. Allows to access a description

//let mySymbol = Symbol('My Symbol'); //Symbol type object
//OR
let mySymbol = `My Symbol`; //String type object
let symbolExample = Symbol(mySymbol); //Symbol type object

console.log(symbolExample.description);