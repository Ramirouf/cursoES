/* Includes: is a method that works on an array
Allows to know if there is an specific value in the array*/

let numbers = [1,2,3,6,5];

if(numbers.includes(4)){
    console.log("Value 4 exists");
} else {
    console.log("Value 4 does not exist");
}

//Powers

let base = 4;
let exponent = 3;
let result = base**exponent;