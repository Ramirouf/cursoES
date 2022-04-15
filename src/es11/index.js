//Dynamic import: Allows you to import a module asynchronously ( dynamically )
//Only loads the module when it is needed, not when the page loads
//Useful for optimizing the page load time

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js"); //Module loaded when the button is clicked
  module.hello();
});

//Added feature: Capability to work with larger numbers than 2**53 (big int)
//Previously, the largest number JavaScript could handle was 2**53 - 1

const bigInteger = 9007199254740991n;
const bigInteger2 = BigInt(9007199254740992);

console.log(bigInteger);
console.log(bigInteger2);

// Promise.all: Allows you to wait for multiple promises to resolve before continuing
// Promise.allSettled: Returns a promise which is resolved after all the given promises are solved o rejected

const promise1 = new Promise((resolve, reject) => reject("Rejected"));
const promise2 = new Promise((resolve, reject) => resolve("Resolved 1"));
const promise3 = new Promise((resolve, reject) => resolve("Resolved 2"));

Promise.allSettled([promise1, promise2, promise3]).then((results) => console.log(results));

//Promise.all and Promise.allSettled are useful for when you want to wait for multiple promises to resolve before continuing
//Promise.all: Is rejected when one of the promises is rejected
//Promise.allSettled: Won't care about the promises' state, only wais for all of them to be resolved

//Global this: The global object in JavaScript

console.log(window); //Error because window undefined when ran with node
console.log(globalThis);

//NULL operator ( ?? ): for working with null values
//Returns its operand on the right side when the operand on the left side is null or undefined
//Returns the operand on the left side otherwise

const foo = null ?? "default string"; //Returns 'default string' because left side is null
console.log(foo);

const foo2 = "foo" ?? "default string"; //Returns 'foo' because left side is not null
console.log(foo2);

//Optional chaining: Allows you to access properties of an object using the ?. operator
//If the property exists, it returns its value, otherwise it returns undefined
//Useful for working with values that may or may not exist
//For example, when calling an API, you may not know if the API will return a value or not

const user = {};

console.log(user.profile.email); //Returns an error and stops the execution
console.log(user?.profile?.email); //optional chaining used, so returns undefined (and the program doesn't crash)

if (user?.profile?.email) {
  //Evaluates if resource exists
  //Now, it goes to the else because undefined != true
  console.log("Email exists");
} else {
  console.log("Email doesn't exist");
}
