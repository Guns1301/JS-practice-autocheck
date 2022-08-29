// 3
function checkStorage(available, ordered) {
  
  if (ordered === 0) {return "Your order is empty!";
  } 
  if (ordered > available) {return "Your order is too large, not enough goods in stock!";
  }    
 return "The order is accepted, our manager will contact you";
}

// 4
// Для доступа к значению элемента массива применяют синтаксис квадратных скобок массив[индекс]. Между именем переменной массива и квадратными скобками не должно быть пробела.
//! Внимание Индексация элементов массива начинается с нуля.

const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement =fruits[fruits.length - 1]


// 8/32

const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length-1; // Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.
const lastElement = fruits[lastElementIndex]; //Значение последнего элемента массива

// 9/32 Задача: Крайние элементы массива

// Напиши функцию  которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {

 const firstElement = array[0];
 const lastElement = array[array.length - 1];
  
return (newArray = [firstElement, array[lastElement]])}


// 10/32

function splitMessage(message, delimeter) {
  let words;
  
  words = message.split(delimeter);
  return words;
}

// 11/32
// нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
 
  message = message.split(' '); // split превращает строку в массив
  // перезаписывается значение message - теперь оно равно массиву из строку
  return result = message.length * pricePerWord // цену за слово умножаем на длинну массива

  // 12/32
  // Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).
  function makeStringFromArray(array, delimeter) {
  let string;

  string = array.join(delimeter);

  return string;
}}

// 13/32
// ! Внимание Slug это всегда строка в нижнем регистре, слова которой разделены тире.
//* Методы split() и join()
// split(s) — позволяет превратить строку в массив, разбив ее по разделителю s. Это не метод массива, но рассматриваем мы его сейчас, так как раньше мы о массивах не знали.

// join(s) — делает в точности противоположное split. Он берет массив и склеивает его в строку, используя s как разделитель.
function slugify(title) {
  
 title = title.toLowerCase().split(' ').join('-');
  
  return title;
}
slugify("Arrays for begginers")

// 14/32
//* Метод slice(begin, end)
// возвращает новый массив, содержащий копию части исходного массива, не изменяя его.Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// Если begin и end не указаны, будет создана полная копия исходного массива.
// Если не указан end, копирование будет от start и до конца исходного массива.
// Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1,4);
const lastThreeEls = fruits.slice(-3);





// 16/32
function makeArray(firstArray, secondArray, maxLength) {
  return firstArray.concat(secondArray).slice(0, maxLength);
}
//  17/32
// * for (Инициализация; Условие; Пост - выражение) {  // Тело цикла}

//* Инициализация - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и указания её начального значения.
//* Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла. Тело цикла выполняется только тогда, когда выражение приводится к true. Цикл завершается, если значение будет false.
//* Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
//* Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если выражение условия приводится к true.

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

for (let i = 0; i < fruits.length; i += 1) {

  const fruit = fruits[i]; 
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
  console.log(filterArray([12, 24, 8, 41, 76], 38),

// 24/32
//* Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям, когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).
    
    
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
//* Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

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
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

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
// *Оператор break
// Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

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
// ! return
//* Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.
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