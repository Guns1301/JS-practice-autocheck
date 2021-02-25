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
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// обращение в [] скобках обязательно ' строка ' !!!
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];

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

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Значением вычисляемого свойства может быть любое валидное выражение.  Имя этого свойства будет взято из значения переменной
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
};


// 10/41

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

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
                        
  if (apartment.hasOwnProperty(key)){}
};


// 14/41
function countProps(object) {

  const keys = Object.keys(object);
  let propCount = keys.length

  return propCount;
}

// 15/41

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
  
const values = Object.values(salaries);
  for (const value of values){
  totalSalary += value
  };
 
  return totalSalary;
}

// 17/41


const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex) 
  // если в объекте colors есть имя свойсвта hex тогда пуш его в новый массив 
  rgbColors.push(color.rgb)
};


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


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { n/ame: 'Сканер', price: 2700, quantity: 3 },
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