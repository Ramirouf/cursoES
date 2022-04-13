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

//Former way of assigning values to an object
/*let name = 'Ramiro';
let age = 20;
let country = 'ARG';*/
obj = {name: name, age: age, country: country};

console.log(obj);

//ES6 way of assigning values to an object

obj2 = {name, age, country};    
console.log(obj2);

//Arrow functions: (they are anonymous functions)
//They are used to create functions that don't have a name 
//Also, they inherit "this" from the block scope in which they are declared

const names = [
    {name: 'Ramiro', age: 20},
    {name: 'Juan', age: 23},
    {name: 'Pedro', age: 25}
];
//Get name for each element in array
//Normal way, passing a normal anonymous function
let listOfNames = names.map(function(item){
    console.log(item.name);
});

//ES6 way of doing it, passing an arrow function
let listOfNames2 = names.map(item => console.log(item.name));
//Two ways
const listOfNames3 = (name, age, country) => {

}
//In case we only need one alement, parenthesis can be supressed 
const listOfNames4 = name => {

}

//Calculate square of a number with arrow functions
const num = 4;
//receives a "num" parameter, then it "passes" it to the functions procedure (num*num)
//then returns the result to the square variable
const square = num => num*num;

//Promises (used for async)
//JS is a synchronic language, so promises are used for doing asynchronism

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Good');

        } else {
            reject('Bad');
        }
    });
}
//The "then" method is used to handle the result of the promise, doing something with it
//Also, there can be many then elements
//The catch method is used to handle the error of the promise, doing something else
helloPromise()
    .then(Response => console.log(Response))
    .then(() => console.log('Hi'))
    .catch(error => console.log(error));

//Calculator project
//Classes
class calculator {
    //Constructor: Method for initializing the class
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    add(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

//Creating an instance of class "calculator", named "calc"
const calc = new calculator();

console.log(calc.add(2,2));

//Import and export: For working with modules

import {hello} from './module.js';

hello();

//Generators: Special function that returns a series of values according to the defined algorithm

function* helloWorld() { //Generator
    if(true ){
        yield 'Hello, '; //Yield saves the state internally
    }
    if (true){
        yield 'World'; //Second element executedes
    }
}

const generatorHello = helloWorld();
/* We can use "next" to execute the first logic
When used again, it will remember what has been executed,
And it will execute the following logic, and so on */

console.log(generatorHello.next().value); //Hello, 
console.log(generatorHello.next().value); //World
console.log(generatorHello.next().value); //Undefined

