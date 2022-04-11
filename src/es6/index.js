/*
+ Default params: (if the function doesn't receive any parameter, it assigns the default value)
+ Template literals: (allows to use variables inside strings)
*/

//Former way of doing it
function newFunction(name, age, country){
    var name = name || 'Ramiro';
    var age = age || 20;
    var country = country || 'ARG';
    
    console.log(name, age, country);
}

//ES6 way of doing it

function newFunction2(name = 'Ramiro', edad = 20, country = 'ARG'){
    console.log(name, edad, country);
}

newFunction2();
newFunction2('Juan', '23', 'USA');

// Template literals example

let hello = 'Hello';
let world = 'World';

let phrase = `${hello} ${world}`;

console.log(phrase);