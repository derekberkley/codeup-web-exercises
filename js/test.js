if (true) {
    let x = 5;
}
console.log(typeof x);

function sayHello(name) {
    return 'Hello, ' + name + '!';
}
const sayHelloa = (name) => { 'Hello, ' + name + '!' };

const sayHellob = name => {  'Hello, ' + name + '!' };

const sayHelloc = (name) => `Hello, ${name}!`;

console.log(sayHello('Derek'));
console.log(sayHelloa('Derek'));
console.log(sayHellob('Derek'));
console.log(sayHelloc('Derek'));

const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);