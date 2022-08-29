//* Основы ООП
// класс, конструктор, прототип(чертеж), /экземпляр (объект), /интерфейс(набор свойств и методов)

const Car1 = function ({ brand, model, price }) {
  //можно передать ({brand,model,price})

  //options = {} это параметр по умолчанию
  // в таком случае this.brand = brand
  // если на функцию приходит объект мы можем его деструктуризировать
  this.brand = brand; //this.brand = options.brand;
  this.model = model;
  this.price = price;
};

const honda = new Car1({
  brand: 'Honda',
  model: 'Accord',
  price: 9000,
});
console.log(honda);

const _audi = new Car1({
  brand: 'Audi',
  model: 'A4',
  price: 7000,
});
console.log(_audi);

// const nissan = new Car();
// console.log(nissan);

Car1.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

_audi.changePrice(5900);
console.log(_audi);

// 7/19

function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value;
};

StringBuilder.prototype.padEnd = function (str) {
  console.log(this.value + str);
  return `${this.value}${str}`;
};
StringBuilder.prototype.padStart = function (str) {
  console.log(str + this.value);
  return `${str}${this.value}`;
};

StringBuilder.prototype.padBoth = function (str) {
  console.log(str + this.value + str);
  return `${str}${this.value}${str}`;
};

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

class Car {
  // Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только классу, но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся к самому классу.

  //Добавим классу пользователя приватное свойство type - его тип, определяющий набор прав, например администратор, редактор, просто пользователь и т п. Возможные типы пользователей будем хранить как статическое свойство TYPES - объект со свойствами.

  //Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.
  static MAX_PRICE = 50000;
  #price;
  // Статические свойства также могут быть приватные, то есть доступные только внутри класса. Для этого имя свойства должно начинаться с символа #, также как приватные свойства. Обращение к приватному статическому свойству вне тела класса вызовет ошибку.

  constructor({ price }) {
    this.#price = price;
  }
  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice >= Car.MAX_PRICE) {
      return;
    }
    this.#price = newPrice;
  }
  // собственное статичное свойство класса, значением this будет сам конструктор класса Car. Как понимаю, статические свойства и методы используются для самого класса, а не для других объектов.
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
