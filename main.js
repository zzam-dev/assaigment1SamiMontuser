// 1. Convert the string "123" to a number and add 7
let str = "123";
let result1 = Number(str) + 7;
console.log(result1);

// 2. Check if the given variable is falsy and return "Invalid"
function checkFalsy(value) {
  return !value ? "Invalid" : "Valid";
}

console.log(checkFalsy(0));

// 3. Print odd numbers from 1 to 10 using continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// 4. Return only even numbers using filter
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// 5. Merge two arrays using spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [...arr1, ...arr2];
console.log(merged);

// 6. Return the day of the week using switch
function getDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

console.log(getDay(2));

// 7. Return string lengths using map
let words = ["a", "ab", "abc"];
let lengths = words.map((word) => word.length);
console.log(lengths);

// 8. Check if a number is divisible by 3 and 5
function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}

console.log(checkDivisible(15));

// 9. Arrow function to return the square
const square = (num) => num * num;

console.log(square(5));

// 10. Destructure an object and return a formatted string
function personInfo({ name, age }) {
  return `${name} is ${age} years old`;
}

const person = { name: "John", age: 25 };
console.log(personInfo(person));

// 11. Return the sum of multiple parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// 12. Return a promise that resolves after 3 seconds
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

delayedSuccess().then((message) => console.log(message));

// 13. Find the largest number in an array
function largestNumber(arr) {
  return Math.max(...arr);
}
// Be brave enough to make a O(1) loop that does this.

console.log(largestNumber([1, 3, 7, 2, 4]));

// 14. Return an array containing only object keys
function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys({ name: "John", age: 30 }));

// 15. Split a string into an array of words
function splitWords(str) {
  return str.split(" ");
}

console.log(splitWords("The quick brown fox"));
// ["The", "quick", "brown", "fox"]

//Overall 15/15
