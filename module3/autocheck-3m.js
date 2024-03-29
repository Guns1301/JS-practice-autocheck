// 1/41

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// 2/41
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  }

};

// 3/41

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;



// 4/41

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];

// 5/41
// Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]. Похоже на обращение к элементу массива с отличием в том, что в скобках указывается не индекс элемента, а имя свойства как строка.

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// обращение в [] скобках обязательно ' строка ' !!!
const aptRating = apartment['rating']; //4
const aptDescr = apartment['descr']; //'Просторная квартира в центре'
const aptPrice = apartment['price']; // 2153
const aptTags = apartment['tags']; // 'premium', 'promoted', 'top'

// 6/41

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};
apartment.price = 5000;
apartment.rating = 4.7;
// вложенность в обьекте // owner объект со свойством name 
apartment.owner.name = 'Генри Сибола';
// массив тегов в свойстве tags добавив в конец строку 'trusted'
apartment.tags.push('trusted');


// 7/41

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Генри Сибола',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: 'Ямайка',
  city: 'Кингстон',
  // помнить что свойсвтва разделяются между собой запятыми 
};

// 8/41

const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Синтаксис коротких свойств (shorthand properties) позволяет использовать имя переменной как имя свойства, а её значение как значение свойства.при объявлении объекта достаточно указать только имя свойства, а значение будет взято из переменной с аналогичным именем.
  name,
  price,
  image,
  tags,
};


// 9/41
// ! Вычисляемые свойства
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Значением вычисляемого свойства может быть любое валидное выражение.  Имя этого свойства будет взято из значения переменной
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
};


// 10/41
// * for...in
// ! В отличии от массива или строки, объект - это не итерируемая сущность, то есть его нельзя перебрать циклами for или for...of. Для перебора объектов используется специальный цикл for...in, который перебирает ключи объекта  for (key in object) { инструкции }

// Переменная key доступная только в теле цикла. На каждой итерации в неё будет записано значение ключа (имя) свойства. Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок.
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  //  Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок.
  values.push(apartment[key]);
  // тут буквально написано = push в массив values значение ключа из объекта apartment
};

// 11/41
// *Метод hasOwnProperty()
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;
// Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта. Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства. Для того чтобы узнать есть в объекте собственное свойство или нет, используется метод hasOwnProperty(key), который возвращает true или false.
for (const key in apartment) {
  // при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.
  
  if (apartment.hasOwnProperty(key)) {

    // буквально = если у объекта apartment есть собвстенное свойство (имя свойства) т. е. значение = true , тогда добавь в массив 
    keys.push(key);
    values.push(apartment[key]);
  }
}


// 12/41

function countProps(object) {
  let propCount = 0;
 
for ( const key in object ){
  
  if (object.hasOwnProperty(key)){
    propCount +=1
}
}
  
  return propCount;
}

// 13/41
// *Метод Object.keys()
// У встроенного класса Object есть несколько полезных методов для работы с объектами. Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.

// *Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];


const keys = Object.keys(apartment); // тут буквально массив ключей объекта apartment 

for (const key of keys) { // перебор массива
  values.push(apartment[key]);
};


// 14/41
function countProps(object) {

  const keys = Object.keys(object);
  let propCount = keys.length

  return propCount;
}

// 15/41
// *Метод Object.values()

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод Object.values(obj) возвращает массив значений его собственных свойств. Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// 16/41

function countTotalSalary(salaries) {
  let totalSalary = 0;
  
const values = Object.values(salaries); // массив значений
  for (const value of values){
  totalSalary += value
  };
 
  return totalSalary;
}

// 17/41
// В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.

// Для перебора такого массива используется стандартный цикл for...of. Значения свойств каждого объекта можно получить используя синтаксис «через точку», так как в каждом объекте набор свойств и их имена будут одинаковые, отличаются только значения.

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  // в переменной color лежит объект { hex: '#f44336', rgb: '244,67,54' } на каждой итерации новый 
  hexColors.push(color.hex) 
  // если в объекте colors есть имя свойсвта hex тогда push его в новый массив 
  rgbColors.push(color.rgb)
};
console.log(hexColors)


// 18/41

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
 
  for (const product of products) {
    
    if (product.name === productName) {
      
      return product.price
    }
 
}
  return null
};

// 19/41

function getAllPropValues(propName) {
 
 const values = [];
  for (let prod of products) {

    const keys = Object.keys(prod);
    for (let key of keys) {

      if (key === propName) {
        
        values.push(prod[key])
      }
    }
  }
    return values;
}
  
// 20/41
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = 0;
  
for (const  product of products){
if (product.name === productName) {
      
    totalPrice = product.price * product.quantity
    }
}
 return totalPrice ;
};

// 21/41

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
//
const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22/41

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures

const meanTemperature = (yesterday + today + tomorrow) / 3;


// 23/41
// *Изменение имени переменной
// При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства. Сначала пишем имя свойства из которого хотим получить значение, после чего ставим двоеточие и пишем имя переменной в которую необходимо поместить значение этого свойства.

// Задание
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures.Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon : highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24/41

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

// Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной color
// for (const color of colors) {
//   const {hex,rgb} = colors;
  
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.
for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
  
  }

//  25/41
//* глубокая деструктуризация объекта

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const { 
  // присвоение локальной перенной другое имя low: lowToday
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg' },
  // присвоение значения несуществующей переменной - icon: todayIcon = 'значение по умолчанию'
  tomorrow: {
    low: lowTomorrow, high:
    highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' }

} = forecast

// 26/41
// *Паттерн «Объект настроек»

// Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. В результате получается очень неочевидный код в месте её вызова.
function calculateMeanTemperature(forecast) {

// Паттерн «Объект настроек» помогает решить эту проблему, заменяя набор параметров всего одним - объектом с именованными свойствами.
  const { 
    today: { low: todayLow, high : todayHigh },
    tomorrow: {low: tomorrowLow,high: tomorrowHigh,}
     
  } = forecast 
 
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


// * Операция spread при передаче аргументов
// 27/41
// Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.

// Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

// Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.

// Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов (чисел), то есть ожидает не массив значений, а произвольное количество аргументов.
const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


// 28/41
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более краткой форме.
const allScores = [...firstGroupScores ,...secondGroupScores,...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);


// 29/41
// Операция spread позволяет распылить свойства произвольного количества объектов в один новый
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
// Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого объекта могут перезаписать значение уже существующего свойства, если их имена совпадают
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };

// 30/41
function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
    
  return  {
  completed, category, priority, ...data
  };

  // 31/41

  
  // 32/41
  function addOverNum(number, ...args) {
  let total = 0;
// Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, объявив параметры до «сбора».
  for (const arg of args) {

    if (arg > number)
    {
      total += arg
    }
  }
// Все аргументы, для которых будут объявлены параметры, передадут им свои значения, остальные аргументы будут помещены в массив. Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.
  return total;

    // 33/41

    function findMatches(number, ...args) {
      const matches = [];

      for (const arg of args) {
        if (number.includes(arg)) {
          matches.push(arg);

        }
        
      };
      return matches;
    };


    // 34/41

    // До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных, например информация о книге и т. п. Объекты-хранилища обычно находятся в массиве таких же объектов, который представляет коллекцию однотипных элементов.Объекты могут хранить не только данные, но и функции для работы с этими данными - методы. Если значение свойства это функция, такое свойство называется методом объекта.

    const bookShelf = {
  
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName){
  return `Удаляем книгу ${bookName}`;},
  
  updateBook(oldName, newName) {
  
  return `Обновляем книгу ${oldName} на ${newName}`;}
  // Такие объекты можно назвать «моделями». Они связывают данные и методы для работы с этими данными. Например, можно было объявить переменную books и две функции getBooks() и addBook(bookName), но тогда это были бы три независимые сущности без явной синтаксической, и со слабой логической связями.
};


// 35/41

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Методы используются для работы со свойствами объекта, их изменения. Для доступа к объекту в методе используется не имя переменной, например bookShelf, а ключевое слово this - контекст. Значением this будет объект перед «точкой», то есть объект который вызвал этот метод, в нашем случае это ссылка на объект bookShelf
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
	
	
    // Для того, чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.Будет логично задуматься - почему бы не использовать при обращении к свойствам имя объекта, ведь мы явно не собираемся его менять. Дело в том, что имя объекта штука не надежная, методы одного объекта можно копировать в другой (с другим именем), а в будущем узнаем, что часто, при создании объекта мы заранее вовсе не знаем имени. Использование this гарантирует, что метод работает именно с тем объектом, который его вызвал.
  },
    };


    // 36/41

    const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: [],
  // Пиши код выше этой строки
    };
    
    // 37/41

    const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  
 getPotions() {return this.potions},
  
  // Пиши код выше этой строки
    };
    
    // 38/41
    const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
      addPotion(potionName) {
    
        this.potions.push(potionName);
   
  },
};

    // 39/41

const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    
const IndexPotionName = this.potions.indexOf(potionName)
    
    this.potions.splice(IndexPotionName, 1);
  },
};

// 40/41
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
   
 const IndexPotionName = this.potions.indexOf(oldName);
    this.potions.splice(IndexPotionName, 1, newName);
    
  },
    };
    

    // 41/41
const atTheOldToad = {
    potions: [
        { name: 'Зелье скорости', price: 460 },
        { name: 'Дыхание дракона', price: 780 },
        { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
        const { potions } = this;
        return potions;
    },
  
    addPotion(potionName) {
        const { potions } = this;
        if (potions.includes(potionName)) {

            return `Зелье ${potionName} уже есть в инвентаре!`
        }
        potions.push(potionName);
    },
  
    removePotion(potionName) {
        const { potions } = this;

        for (let i = 0; i < potions.length; i += 1) {
            const { name } = potions[i];
            if (potionName === -1) { return `Зелья ${potionName} нет в инвентаре!` }
            if (potionName === name) {
                console.log(`Нашли такую позицию: -, ${potionName}`);
                console.log(i);
                potions.splice(i, 1);
            }
        }
    },
    updatePotionName(oldName, newName) {
        console.table(this.potions);
        for (let i = 0; i < this.potions.length; i += 1) {
            console.log(this.potions[i].name);
            if (oldName === this.potions[i].name) {
                console.log(this.potions[i].name);
                this.potions[i].name = newName;
            };
        };
    }
}