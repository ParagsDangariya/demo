//	Write three functions that compute the sum of the numbers in a
// given list using a for-loop, a while-loop, and recursion.

let n = [1, 3, 5, 6, 8, 9];

function sumToforloop(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
}
console.log(sumToforloop(n));

function sumTowhileloop(n) {
  let sum = 0;
  let i = 0;
  while (i < n.length) {
    sum += n[i];
    i++;
  }

  return sum;
}
console.log(sumTowhileloop(n));
let index = 0;
function sumTorecursion(n, index) {
  if (index == n.length) {
    return 0;
  } else {
    return n[index] + sumTorecursion(n, index + 1);
  }
}

console.log(sumTorecursion(n, index));

//	Write a function that combines two lists by alternating
//taking elements. For example: given the two lists [a, b, c] and [1, 2, 3],
//the function should return [a, 1, b, 2, c, 3].

let array1 = ['a', 'b', 'c'];
let array2 = [1, 2, 3];

let result = array1.reduce(function (arr, v, i) {
  return arr.concat(v, array2[i]);
}, []);

console.log(result);

//	Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz”
//instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log('FizzBuzz');
  else if (i % 3 == 0) console.log('Fizz');
  else if (i % 5 == 0) console.log('Buzz');
  else console.log(i);
}

//•	Write a function that computes the list of the first 100 Fibonacci numbers.
//By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and
//each subsequent number is the sum of the previous two. As an example, here are the
//first 10 Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

let fibonacci_series = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    let s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log('length of series is ' + fibonacci_series(99).length);
console.log(fibonacci_series(99));

//	Write a function that will reverse a string.

function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse('hello'));

//	Write a function that will reverse a sentence (ex: “quick brown fox” -> “fox brown quick”)

let newString = '';
let theString = 'hello parag';
theString.replace(/[^\s]*/g, function (value) {
  newString = value + ' ' + newString;
});

console.log(newString);

//	Write a function that will return the maximum value in a list.

let array = fibonacci_series(20);
let max = Math.max(...array);
console.log(max);

//	Write a function that will return a list of distinct values (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")

let myArray = [1, 3, 5, 3, 7, 3, 1, 1, 5];
let unique = myArray.filter((v, i, a) => a.indexOf(v) === i);

console.log(unique);

//	Write a function that takes a string of expressions (only variables, +, and -) and a set of
//variable/value pairs (i.e. a=1, b=7, c=3, d=14) and returns the result of the expression
//("a + b + c - d" would be -3).

let a = 1;
let b = 7;
let c = 3;
let d = 14;
let expression = 'a + b + c - d';

let answer = eval(expression);
console.log(answer);

//	Write a function that checks if a string is a palindrome.

function checkPalindrom(str) {
  return str == str.split('').reverse().join('');
}

console.log(`this is palindrome ${checkPalindrom('hello')}`);
console.log(`this is palindrome ${checkPalindrom('ollo')}`);
