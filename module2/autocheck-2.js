























// 16/32
function makeArray(firstArray, secondArray, maxLength) {
  return firstArray.concat(secondArray).slice(0, maxLength);
}
//  17/32
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
}

//18/32
function calculateTotal(number) {

  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }

  return sum;
}

// 19/32 
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}

// 20/32

function calculateTotalPrice(order) {
  let total = 0;

  for (const ord of order) {
    total += ord;

  }

  return total;
};

// 21/32

function findLongestWord(string) {

  let words = string.split(' ');
  let LongestWord = words[0];

  for (let word of words) {
    if (word.length > LongestWord.length) {
      LongestWord = word
    }
  }
  return LongestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// 22/32

function createArrayOfNumbers(min, max) {
  const numbers = [];

for ( let i = min ; i <= max; i += 1){
  
   numbers.push(i)
}
  return numbers;
}
console.log(createArrayOfNumbers(1,3));
console.log(createArrayOfNumbers(14, 17));

//23/32


function filterArray(numbers, value) {
  const biggestNumbers = [];
  for (const number of numbers) {
    if (number > value)
    {
      biggestNumbers.push(number)
      }
    
  }
 return biggestNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)),
  console.log(filterArray([12, 24, 8, 41, 76], 38)

// 24/32

function checkFruit(fruit) {
      const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

      return fruits.includes(fruit);
    };


// 25/32 
function getCommonElements(array1, array2) {
  
const CommonElements = [];
    
    for (const element of array1) {
        if (array2.includes(element))
        {
            CommonElements.push(element)
        }
    }
    return CommonElements;
}
console.log(getCommonElements([1, 2, 3], [2, 4]))
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

// 26/32 

function calculateTotalPrice(order) {
  let total = 0;

  for (const ord of order){
  total += ord}
  
  return total;
}

// 27/32
function filterArray(numbers, value) {
  const filteredNumbers = [];
  
  let count = 0 ;
  
  for (number of numbers) {
    count += number;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;

}

// 28/32 
const a = 3 % 1 ;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;

// 29/32
 


function getEvenNumbers(start, end) {
  
  let evenNumbersArray = [];

  for (let i = start; i <= end; i += 1){
   
    if (i % 2 === 0) {
      evenNumbersArray.push(i);
    }
  }
  return evenNumbersArray;
}

// 30/32

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
      break;
  }

}

// 31/32

function findNumber(start, end, divisor) {

  for (let i = start; i < end; i += 1)
    
    if (i % divisor === 0)
  
  return i;
}


// 32/32

function includes(array, value) {
 
for (let i = 0; i < array.length; i += 1) {
  if (array[i] === value) {
    return true;
  }
}
  return false; 
}