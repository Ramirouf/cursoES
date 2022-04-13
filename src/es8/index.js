//Object.entries Returns keys and values of an object to a matrix
//In the following object, frontend, backend and design are the keys,
//and Carlos, Ramiro, Itati are the values
const data = {

    frontend: 'Carlos',
    backend: 'Ramiro',
    design: 'Itati',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); //Amount of registers (lines)

//Object.values returns values of an object to an array

const data2 = {
    frontend: 'Carlos',
    backend: 'Ramiro',
    design: 'Itati',
}

const values = Object.values(data2);
console.log(values);
console.log(values.length); //Amount of values

//Padding: add elements or an empty string to a certain string ???
//.padStart(totalAmountOfCharacters, stringToAddInTheStart)
//.padStart(totalAmountOfCharacters, stringToAddInTheEnd)

const string = 'Hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, ' ------'));

//Async Await

const HelloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Error!'))
    })
}

const helloAsync = async () => {
    const hello = await HelloWorld();
    console.log(hello);
}
helloAsync()

const newFunction = async () => {
    try {
        const hello = await HelloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

newFunction();