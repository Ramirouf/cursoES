const obj = {
    name: 'Ramiro',
    age: '20',
    country: 'ARG',
}

let {country, ...all} = obj;
console.log(all);

//Spread operator

const obj2 = {
    name: 'Ramiro',
    age: 20,
}

const obj21 = {
    ...obj2,
    country: 'ARG',
}

console.log(obj21);

//Promise.finally To know when the promise has finished

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Ended'))

//Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);