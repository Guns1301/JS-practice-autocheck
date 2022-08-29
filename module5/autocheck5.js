// 1 /19

// Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом. Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли браузера отображается как __proto__.

// Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj. Объект, на который указывает ссылка в __proto__, называется прототипом. 
// Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog и возвращает true или false.
// 
const parent1 = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};

const child = Object.create(parent1);

// То есть прототип - это резервное хранилище свойств и методов объекта, автоматически используемое при их поиске. У объекта, который выступает прототипом может также быть свой прототип, у того свой, и так далее.
child.name = 'Jason';
child.age = 27;

console.log(child.hasOwnProperty('name'));

// 2/19

// прототиное наследование это возможность связать объекты по ссылке.

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child1 = Object.create(parent);
child1.name = 'Jason';
child1.age = 27;

// 3/19
// Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым набором свойств, но разными значениями, и методами для взаимодействия со свойствами. Всё это нужно сделать динамически, во время выполнения программы. Для этого используют функции-конструкторы, вызывая их при помощи специального оператора new.

//функция-конструктор
class Car {
  constructor(brand, model, price) {
    console.log(this); // Вызов функции с оператором new приводит к созданию нового объекта и вызову функции в контексте этого объекта. То есть this внутри функции будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями.
    this.brand = brand;
    this.model = model;
    this.price = price;
    // ссылка на объект возвращается на место вызова new Car();
  }
  // При вызове функции-конструктора и создании объекта через new, объект в свойстве prototype функции-конструктора будет прототипом создаваемого объекта.
  getPrice() {
    return this.price;
  }
  // В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией-конструктором. Методы в prototype будут вызываться объектами созданными функцией-конструктором, поэтому для доступа к свойствам вызываемого объекта в методах используется ключевое слово this.
  changePrice(newPrice) {
    this.price = newPrice;
  }
};
// Любая функция, кроме стрелочной, может быть использована как конструктор. Чтобы отличить конструктор от обычной функции, их принято называть с большой буквы, а в самом названии отражать тип создаваемого объекта (существительное).

//
const honda = new Car('Honda', 'Accord', 9000);
console.log(honda);

const nissan = new Car('Nissan', 'Primera', 3500);
console.log(nissan);


// 4/19 
// Функции-конструкторы всегда принимают большое количество входных данных для свойств будущего объекта. Поэтому, к ним также можно применить паттерн «Объект настроек», передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.
class Car {
  constructor(options) {
    this.brand = options.brand; // в таком случае this.brand = brand
    this.model = options.model;
    this.price = options.price;
  }
}

const myCar = new Car({ 
  brand: 'Audi', 
  model: 'Q7', 
    price: 36000,
});
  

// 4/19
// Мы уже знаем что такое прототип объекта, свойство __proto__ и как происходит поиск отсутствующих свойств объекта по цепочке прототипов. Во время вызова функции-конструктора через new и создания нового объекта со свойствами, ему также устанавливается прототип.

//У каждой функции, кроме стрелочных, есть свойство prototype, значение которого это объект с единственным свойством constructor, указывающим на саму функцию-конструктор.
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
};




// 6/19
class Storage {
  constructor(items) {
    this.items = items;

  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    return this.items.push(newItem);
  }
  removeItem(item) {
    for (const it of this.items) {
      if (it === item) {
        return this.items.splice(this.items.indexOf(item), 1);
      }

    }
  }
};




// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// 7/19
class StringBuilder {
  constructor(baseValue) {
    this.value = baseValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value += str;
  }
  padStart(str) {
    console.log(str + this.value);
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}





// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='


// 9/19

// 
class Car {
  // Для инициализации экземпляра в классе есть метод constructor. Если он не объявлен, создаётся конструктор по умолчанию - пустая функция, которая не изменяет экземпляр.
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    // Свойства brand,model и price называются публичные свойства, потому что они будут собственными свойствами объекта-экземпляра и к ним можно будет получить доступ обратившись через точку.Объявлять публичные свойства в теле класса до конструктора необязательно, но это может повысить читабельность, так как код внутри конструктора может быть довольно громоздким и визуально выделить набор свойств класса будет затруднительно.
  }
}

const ferrari = new Car({ ferrari, diablo, 100500});

console.log(ferrari);
// При вызове с опертором new, функция-конструктор добавляет свойства на создаваемый объект.

// 10/19
// В функции-конструкторе объявление методов для работы со свойствами экземпляра делается явно, путём обращения к свойству prototype и добавления на него методов.
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // В классах используется более удобный синтаксис методов класса, который за ширмой делает тоже самое - добавляет методы на свойство Car.prototype. Поэтому в самом начале мы говорили что классы это просто синтаксический сахар - удобная надстройка над функциями-конструкторами.
  getPrice(){
  return this.price} ;
  
  changePrice(newPrice){
  this.price = newPrice}; 
}


// 11/19

// Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса. Пользователь класса должен получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса.

class Car {
  //В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса. Это одно из отличий классов и функций-конструкторов - в классах легко объявить приватные свойства.
  #brand;
   
  //Допустим почта пользователя должна быть недоступна из вне, то есть приватна. Добавляя к имени свойства символ # мы делаем его приватным. Объявление приватного свойства до инциализации в конструкторе - обязательно.
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
   }
  // Методы класса также могут быть приватными, то есть доступны только в теле класса. Для этого перед их именем необходимо поставить символ #.
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
  
}

// 12/19
class Storage {
  #items;
  
  constructor(items) {          
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  }
}

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// 13/19

class StringBuilder {
  constructor(baseValue) {
    this.#value = baseValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='


// 14/19

// Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. Геттер и сеттер имитируют обычное публичное свойство класса, но позволяют изменять другие свойства более удобным способом. Геттер выполняется при попытке получить значение свойства, а сеттер - при попытке его изменить.

class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this._brand = brand;
    this._model = model;
    this._price = price;

    // имя геттера или сеттера не может называться так же как свойство которое они описывают
// поэтому для внутреннего свойства ставим нижний слэш что б не выдумывать новое имя
  }

//Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно приватных, как их публичный интерфейс. Для работы со свойством которое хранит массив или объект они не подойдут.
  get brand() {
    return this.#brand;
  }
// поставив перед именем свойства ключевые слова get и set. Внутри этих методов мы или возвращаем значение приватного свойства #brand или изменяем его значение. Геттер и сеттер идут в паре и должны называться одинаково.
  set brand(newBrand) {
    this.#brand = newBrand;
  }
// Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, например с какими-то проверками, в отличии от выполнениях этой же операции напрямую со свойством.
  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

// 15/19

class Car {

  static MAX_PRICE = 10000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }

}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// 16/19

class Car {
  static #MAX_PRICE = 50000;
  // В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, которые могут быть как публичные, так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением того, что значением будет метод.
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
    return 'Внимание! Цена превышает допустимую'
    }
    return 'Всё хорошо, цена в порядке'
}
  // Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. Это значит, что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. Логично, потому что статические методы вызывает сам класс, а не его экземпляры.
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// 17/19
// 
class User {

  // Это означает, что мы можем объявить базовый класс, который хранит общие характеристики и методы для группы производных классов, которые наследуют свойства и методы родителя, но также добавляют свои уникальные.

  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Например, в приложении есть пользователи разных типов - администратор, писатель статей, контент менеджер и т. п. У каждого типа пользователя есть набор общих характеристик, например почта и пароль, но также есть и уникальные.

//Сделав независимые классы для каждого типа пользователя мы получим дублирование общих свойств и методов, и при необходимости изменить, например, название свойства, придётся проходить по всем классам, это неудобно и трудозатратно.

//Вместо этого можно сделать общий класс User, который будет хранить набор общих свойств и методов, после чего сделать классы для каждого типа пользователя, которые наследуют этот набор от класса User. При необходимости изменить что-то общее, достаточно будет поменять только код класса User.

class Admin extends User{ 
  static AccessLevel = {
    BASIC: 'basic', 
    SUPERUSER: 'superuser' 
  }
}
//! Важно помнить, что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.


// 18/19

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего клаcса, будет ошибка. При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.

class Admin extends User {
  accessLevel
  // Пиши код ниже этой строки
constructor({email,accessLevel}){
super(email);
  this.accessLevel = accessLevel
}
  
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser


// 19/19
// В дочернем классе можно объявлять методы которые будут доступны только его экземплярам.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  blacklistedEmails = [];

  blacklist(email){
  this.blacklistedEmails.push(email); 
}
  isBlacklisted(email) {
  if (this.blacklistedEmails == email) { 
   return true; 
  }
    return false; 
};
  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 




