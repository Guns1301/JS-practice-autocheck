//* Метод forEach(callback)
// Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.
// 1.Поэлементно перебирает массив.
//2.Вызывает коллбек-функцию для каждого элемента массива.
//3.Ничего не возвращает.
//Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
orderedItems.forEach(function(orderedItem){
 totalPrice+= orderedItem 
   })
  return totalPrice;
}

// Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла. Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.

// у forEach есть два аргумента - это коллбэк и объект в контексте которого будет вызываться этот колбэк

// 2/44
function filterArray(numbers, value) {
    const filteredNumbers = [];
   
    numbers.forEach(function (numbers) {
    //   В большинстве методов, аргументами callback-функции являются значение элемента currentValue (первый параметр), позиция элемента index (второй параметр) и сам исходный массив array (третий параметр).
   if(numbers > value) {
   filteredNumbers.push(numbers);}})
    
    return filteredNumbers;
}
  
console.log(filterArray([1, 2, 3, 4, 5], 3))
console.log(filterArray([12, 24, 8, 41, 76], 38))


// 3/44

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
  
  firstArray.forEach(function(firstArray){
  if (secondArray.includes(firstArray)) {
        commonElements.push(firstArray);
      }
  })
    return commonElements;
}
  
console.log(getCommonElements([1, 2, 3], [2, 4])); //возвращает [2].
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) // возвращает [10, 30, 40].


// 4/44

// Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она используется как коллбек.

//Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.
const calculateTotalPrice = (quantity, pricePerItem) => {
  // Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.
  return quantity * pricePerItem;
}



// 5 /44
// Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return. Это называется явный возврат (explicit return). Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.

const calculateTotalPrice = (quantity, pricePerItem) => 
    quantity * pricePerItem
   
    // Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется неявный возврат (implicit return). В примере вернётся результат выражения сложения параметров a, b и c.

//Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, но подходит только в случае когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// 6/44

// Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за более краткого синтаксиса объявления, особенно если не нужно тело функции.
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

// 7/44
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number)=> {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    return filteredNumbers;
}
  
// 8/44
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
    return commonElements;
}
  
// 9/44

const changeEven = (numbers, value) => {
    // Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.
    const newArray = [...numbers];
  
  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.splice(newArray.indexOf(number), 1, number + value);
      }
  });
  
  return newArray;
}
  

// 10/44

// Большинство перебирающих методов массива это чистые функции. Они создают новый массив, заполняют его, применяя к значению каждого элемента указанную коллбек-функцию, после чего возвращают этот новый массив.

// Поэлементно перебирает оригинальный массив.
//1. Не изменяет оригинальный массив.
//2. Результат работа коллбек-функции записывается в новый массив.
//3. Возвращает новый массив такой же длины.
//Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив используется как эталон, на базе которого можно сделать другую коллекцию.

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
//Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.
const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);


// 11/44

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.
  
const titles = books.map(book => book.title);
  
// 12/44
// Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, когда результат это многомерный массив который необходимо «разгладить».
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив. Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат работы flatMap().
const genres = books.flatMap((book) => book.genres);
  


// 13/44

const getUserNames = users => users.map(user => user.name);


// 14/44

const getUserEmails = users => users.map(user => user.email);

// 15/44 

// Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number %2 ===0 );
const oddNumbers = numbers.filter(number => number % 2 !== 0);
//1. Не изменяет оригинальный массив.
//2. Поэлементно перебирает оригинальный массив.
//3. Возвращает новый массив.
//4. Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
//5. Если коллбек вернул true элемент добавляется в возвращаемый массив.
//6. Если коллбек вернул false элемент не добавляется в возвращаемый массив.
//7. Если ни один элемент не удовлетворил условию, возвращает пустой массив.

console.log(evenNumbers);
console.log(oddNumbers);
// То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива и если результат её выполнения true, текущий элемент добавляет в новый массив.


// 16/44

// Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. Этот приём работает только с массивом примитивных значений - не объектов

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  
const allGenres = books.flatMap((book) => book.genres);
// Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, то есть без повторений.
 const uniqueGenres = allGenres.filter(
   (genres, index, books) => books.indexOf(genres) === index);
    // Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс в оригинальном массиве всех курсов. В параметре index хранится индекс текущего элемента course при переборе массива методом filter.Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

// 17/44

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';

// При работе с массивом объектов выполняется фильтрация по значению какого-то свойства. В результате получается новый массив отфильтрованных объектов.

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);

const booksByAuthor = books.filter((book) =>  book.author === AUTHOR);


// 18/44
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// 19/44
const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age < maxAge);

// 20/44

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

// 21/44

const getFriends = (users) => {
  return users.flatMap((user) => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);

};


// 22/44
const getActiveUsers = (users) => users.filter(user => user.isActive);

// 23/44

const getInactiveUsers = (users) => users.filter(user => !user.isActive);

//24/44
// *Метод find()
// Если метод filter(callack) используется для поиска всех элементов удовлетворяющим условию, то метод find(callback) позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается. То есть он ищет до первого совпадения.
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

// 1. Не изменяет оригинальный массив.
// 2. Поэлементно перебирает оригинальный массив.
// 3. Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
// 4. Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.

//Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства. Например, поиск пользователя по почте, автомобиля по серийному номеру, книги по названию и т. п.

// 25/44

const getUserWithEmail = (users, email) => users.find(user => user.email === email);



// *Метод every()
// Метод every(callback) проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// 26/44

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// 1. Не изменяет оригинальный массив.
// 2. Поэлементно перебирает оригинальный массив.
// 3. Возвращает true если все элементы массива удовлетворяют условию.
// 4. Возвращает false если хотя бы один элемент массива не удовлетворяет условию.
// 5. Перебор массива прекращается если коллбек возвращает false.

const eachElementInFirstIsEven = firstArray.every((value)=> value % 2 === 0 );
const eachElementInFirstIsOdd = firstArray.every((value)=> value % 2 !== 0 );

const eachElementInSecondIsEven = secondArray.every((value)=> value % 2 === 0 );;
const eachElementInSecondIsOdd = secondArray.every((value)=> value % 2 !== 0 );

const eachElementInThirdIsEven = thirdArray.every((value)=> value % 2 === 0 );
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// При работе с массивом объектов проверяется значение какого-то их свойства.

// 27/44

const isEveryUserActive = (users) => users.every(user => user.isActive)   
;



// *Метод some()
// Метод some(callback) проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// 1. Не изменяет оригинальный массив.
// 2. Поэлементно перебирает оригинальный массив.
// 3. Возвращает true если хотя бы один элемент массива удовлетворяет условию.
// 4. Возвращает false если ни один элемент массив не удовлетворяет условию.
// 5. Перебор массива прекращается если коллбек возвращает true.

// 28/44
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);

const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);


// 29/44
const isAnyUserActive = users => users.some(user => user.isActive);




// *Метод reduce()

// Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата, как аккумулятор. Немного сложнее других в усвоении, но результат стоит того.

// 1. Не изменяет оригинальный массив.
// 2. Поэлементно перебирает оригинальный массив.
// 3. Возвращает что угодно.
// 4. Делает что угодно.

// Первый параметр коллбек-функции (previousValue) это аккумулятор, то есть промежуточный результат. Значение которое вернёт коллбек-функция на текущей итерации, будет значением этого параметра на следующей.

// Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32
// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32


// То есть метод reduce() используется когда необходимо взять «много» и привести к «одному». В повседневных задачах его применение сводится к работе с числами.

// 30/44
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
//
const totalPlayTime = playtimes.reduce((playtimes, number) => {
  
return playtimes + number });
//
const averagePlayTime = totalPlayTime / playtimes.length;



// *Метод reduce() и массив объектов
// При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, есть массив студентов с баллами за тест. Необходимо получить средний бал.


// 31/44
const totalAveragePlaytimePerGame = players.reduce(
  (total, player) => total + player.playtime / player.gamesPlayed,
  0,
);

// 32/44

const calculateTotalBalance = users => users.reduce((total, user) => {
  return (total + user.balance);
}, 0);


// 33/44

const getTotalFriendCount = users => users.reduce((allFriends, user) => {
  return allFriends + user.friends.length
}, 0);



// *Метод sort()
// Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

// 1. Сортирует и изменяет исходный массив.
// 2. Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
// 3. По умолчанию сортирует по возрастанию.
// 4. Сравнение чисел выполняется по их значению.
// 5. Сравнение всего остального происходит путём приведения их к строке и сравнения порядковых номеров в таблице Unicode.


// 34/44
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Из-за того, что сортируется исходный массив, нарушается принцип чистоты функций и нельзя удобно сделать несколько производных коллекций на базе исходной. Например, сделать коллекцию отсортированную по возрастанию, а другую по убыванию. Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();


// 35/44
// Для указания своего порядка сортировки методу sort(callback) нужно передать коллбек-функцию с двумя параметрами. Это функция сравнения (compare function), порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Если вызов Function(firstEl, secondEl) возвращает любое отрицательное значение, сортировка поставит firstEl перед secondEl. Это сортировка по возрастанию.

// Если вызов Function(firstEl, secondEl) возвращает любое положительное значение больше нуля, сортировка поставит secondEl перед firstEl. Это сортировка по убыванию.

const ascendingReleaseDates = [...releaseDates].sort((firstEl,secondEl) => firstEl - secondEl);

const descendingReleaseDates = [...releaseDates].sort((firstEl,secondEl) => secondEl - firstEl);


// 36/44

// Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
// firstString.localeCompare(secondString)
// Он вызывается на строке которую нужно сравнить(firstString) с той, что передана ему как аргумент(secondString).

// 1. Возвращает отрицательное значение если firstString должна быть перед secondString.
// 2. Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// 3. Если строки одинаковы, возвращается ноль.

//Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

 const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
  
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
 
// 37/44
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName =  [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
//массив книг отсортированный по возрастанию рейтинга.
const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);


// 38/44
const sortByAscendingBalance = users => [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);

// 39/44
const sortByDescendingFriendCount = users => [...users].sort((firstUser,secondUser) => secondUser.friends.length - firstUser.friends.length)
  ;

  // 40/44
// возврат массива пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
const sortByName = users => [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
  


// *Цепочки методов (чейнинг, chaining)

// 41/44

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;

const names = [...books].filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));


// 42/44

const getNamesSortedByFriendCount = users => [...users].sort((firstUser,secondUser) => firstUser.friends.length - secondUser.friends.length).map((user) => user.name)
  ;

  // 43/44
// возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .
const getSortedFriends = users => [...users].flatMap(user => user.friends).filter((friends, index, users) => users.indexOf(friends) === index).sort((firstUser, secondUser) => firstUser.localeCompare(secondUser));

// 44/44
const getTotalBalanceByGender = (users, gender) =>
users.filter(user => user.gender === gender).reduce((total, user) => {
    return (total + user.balance);
 },0);