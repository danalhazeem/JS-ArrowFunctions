// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

function squared(num) {
  return num.maps((x) => x * x);
}

const greet = (name) => `hello ${name}`;
console.log(greet("danah"));

// Write a simple arrow function that takes two parameters and returns their sum.

const add = (a, b) => a + b;
console.log(add(5, 6));

// Write a simple arrow function that squares a number.
const squares = (a) => a ^ 2;

console.log(squares(5));

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const numOfArray = (array) => {
  x = [];
  for (let i = 0; i < array.length; i++) {
    x[i] = array[i] * array[i];
  }
  return x;
};

thearray = [3, 2, 6];
console.log(numOfArray(thearray));
