//replaceAll vs replace
//Replace only replaces the first element in the string that matches
const string = "Hello World. What a wonderful World.";

const replacecedString = string.replace(
  "World",
  "Universe"
);

console.log(replacecedString);

const replacecedString2 = string.replaceAll(
  "World",
  "Universe"
);

console.log(replacecedString2);

//Private methods, to use inside classes
//Can be used to hide methods from outside
//Private methods are prefixed with an underscore
//Private methods can only be accessed from inside the class

class Message {
  #show(value) {
    console.log(value);
  }
  get #add() {}
}

const message = new Message();
message.show("Hello World");

//Promise.any: Global object of promise. It's argument is an array of promises
//It executes many promises at the same time and returns the result of the first promise that resolves

const promise1 = new Promise((resolve, reject) =>
  reject("1")
);
const promise2 = new Promise((resolve, reject) =>
  resolve("2")
);
const promise3 = new Promise((resolve, reject) =>
  resolve("3")
);

Promise.any([promise1, promise2, promise3]).then(
  (response) => console.log(response)
);

//WeakRef: Weak reference to an object
//Useful for it to not be garbage collected

class AnyClass {
  constructor(element) {
    this.ref = new WeakRef(this);
  }
}

//New operators: &&=, ||= and ??=

let isTrue = true;
let isFalse = false;

console.log((isTrue &&= isFalse));

console.log((isTrue ||= isFalse));

let isTrue1 = undefined;
let isFalse1 = undefined;
console.log((isTrue ??= isTrue));
