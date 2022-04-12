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


//Class 3: Let, const, multiline, spread operator and destructuring

//Former way of multiline
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n"
+ "Vivamus euismod, urna eu tincidunt consectetur, nisi nisl aliquam";
//Actual way of multiline
let lorem2 = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit. 
Vivamus euismod, urna eu tincidunt consectetur,`  ;

console.log(lorem);
console.log(lorem2);

//Destructuring

let person = {
    'name': 'Ramiro',
    'age': '20',
    'country': 'ARG'
}

//Normal way of accessing the properties

console.log(person.name, person.age, person.country);

//Applying destructuring

let {name, age, country} = person;
console.log(name, age, country);

//spread operator
//It is used to join elements and arrays in a new array

let team1 = ['Ramiro', 'Juan', 'Pedro'];
let team2 = ['Valeria', 'Maria', 'Ana'];

let education = ['David', ...team1, ...team2];

console.log(education);
/*
Differences between var, let and const
var: variable can be reassigned. Has global scope.
let: variable can be reassigned, but not redeclared. Has block scope.
const: variable can't be reassigned, nor redeclared. Has block scope.

*/

{
    var globalVar = 'Global Var';
    //It will be available in the whole code (global scope)
}

{
    let globalLet = 'Global Let';
    //It will only be available in this block
    console.log(globalLet);

}

console.log(globalVar);
//console.log(globalLet); //It will throw an error

const globalConst = 'Global Const';
//It is a constant, it can't be reassigned nor redeclared