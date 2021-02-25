// поиск самого маленького числа
const numbers = [12, 4, 67, 89, 32, 47, 88, 91, 3];
let smallNumber = numbers[0];

for (const number of numbers) {
    // console.log(number);
    
    if (number < smallNumber) {
        smallNumber = number;
    }
}
console.log(smallNumber);






const friends = ['Chuka', 'Lyolyk', 'Stasik', 'Tema'];
const string = friends.join(', '); // в скобки передаем символ разделителя запятую , тире , любую
//результат метода массива записывается в переменную 
console.log(string);




const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers1 = array1.concat(array2,[35,55,75],[55,105]); //через запятую можно пришить еще массивов
for (const number1 of numbers1 ) {
    total += number1
}
console.log(total);


console.table(numbers1);
console.log(array1);
console.log(array2);



// Коллекция карточек в trello 
// splice 
// удалить
// добавить 
// обновить


const cards = ['Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
console.table(cards)


// удаление по индексу , метод indexOf()

const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);

console.log(index);
cards.splice(index, 1);

// console.log(cards.splice(index, 1));

console.table(cards)


// Добавление по индексу

const cardToInsert = 'Карточка-6';

// (индекс куда вставить, не удалять, новые значения 5,12,67,90 )
// cards.splice(2, 0, 5, 12, 67, 90);
cards.splice(index, 0, cardToInsert);
console.table(cards);



// Обновление (по индексу)
const cardToUpdate = 'Обновленная Карточка-4';
const indexCard = cards.indexOf(cardToUpdate);
console.log(indexCard);
cards.splice(indexCard, 1, cardToUpdate);

console.table(cards);