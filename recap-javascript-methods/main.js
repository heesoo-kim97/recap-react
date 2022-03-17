const three = 3;
const two = 2;
const five = 5;

const maximumValue = Math.max(three, two, five);
console.log('maximum value is: ', maximumValue);

const heros = ['batman', 'spiderman', 'iron man', 'hulk'];
const randomNumber = Math.random(heros) * heros.length;

console.log(randomNumber);

const randomIndex = Math.floor(randomNumber);
console.log('the random index is:', randomIndex);

const randomHero = heros[randomIndex];
console.log('the random Hero:', randomHero);

var library = [
  {
    title: 'Harry Potter: Chamber of Secrets',
    author: 'J.K Rowling'
  },
  {
    title: 'Harry Potter: Goblet of Fire',
    author: 'J.K Rowling'
  },
  {
    title: 'Harry Potter: Order of the Phoenix',
    author: 'J.K Rowling'
  }
];

// var lastBook = library.pop();
console.log('lastBook:', library.pop()); // we can call lastbook as well
console.log('after pop is:', library);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 2);
console.log('library', library);

var fullName = 'Heesoo Kim';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
