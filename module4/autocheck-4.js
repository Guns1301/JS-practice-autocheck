// 1/10
// Функции не отличаются от чисел, строк или массивов - это просто специальный тип данных (объект высшего порядка), значение, которое можно хранить в переменной или передавать, как аргумент, в другую функцию
function makerPizza() {
  return 'Ваша пицца готовится, ожидайте.';
}

const result = makerPizza();
const pointer = makerPizza;
// В первом случае мы вызываем функцию makerPizza() при помощи круглых скобок и в консоль выводится результат её выполнения. Во втором случае передаётся ссылка на функцию, а не результат её вызова (отсутствуют круглые скобки), поэтому в консоль выводится тело функции. Это значит, что функцию можно присвоить в переменную или передать, как аругмент, другой функции.


// 2/10

// Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию. 

// Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или возвращающая функцию как результат.


function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}


function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
};
// Мы передали ссылку на функцию makePizza/deliverPizza как аргумент, поэтому она будет присвоена в параметр callback и вызвана внутри функции makeMessage через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция
console.log(makeMessage('Роял гранд', makePizza));
console.log(makeMessage('Ультрасыр', deliverPizza));


// 3/10

function makePizza(pizzaName, callback) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza('Роял гранд', function deliverPizza(pizzaName) {
  console.log(`Доставляем пиццу ${pizzaName}.`);
});
// Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить прямо при вызове функции в которую передаём колбэк. Такая функция будет доступна только как значение параметра и больше нигде в коде. называется она - инлайн функция

makePizza('Ультрасыр', function eatPizza(pizzaName) {
  console.log(`Едим пиццу ${pizzaName}`);
});


// 4/10

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],

  order(pizzaName, onSuccess, onError) {
    for (const pizza of this.pizzas) {
      if (pizzaName === pizza) {
        return onSuccess(pizzaName)
      }
    }
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
  },
};

// Колбэк для onSuccess 
// const onSuccess =
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
// const onError =
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);


// 5/10

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Внутри функций есть зарезервированное ключевое слово this. Во время исполнения функции, в this записывается ссылка на объект, в контексте которого она была вызвана. Таким образом, в теле функции мы можем получить доступ к свойствам и методам этого объекта.
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
};


// 6/10

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


// 7/10 

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта, при этом функция не является его методом. Для этого у функций есть методы call и apply.
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
}

const messages = orders.map(function (order, index) {
  return composeMessage.call(order, index + 1);
});

// 8/10

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Метод apply это аналог метода call за исключением того, что синтаксис передачи аргументов требует не перечисление, а массив, даже если аргумент всего один.На практике, в основном используется метод call.
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = orders.map((order, index) =>
  composeMessage.apply(order, [index + 1])
);


// 9/10

const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Методы call и apply вызывают функцию «на месте», то есть сразу. Но в случае колбэк-функций, когда необходимо не сразу вызвать функцию, а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');
//bind решает проблему передачи методов объекта как колбэка
// при передаче мы передаем не ссылку на оригинальный метод а его привязанную версию с контекстом

// 10/10
const service = {
    mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
    subscribe(email) {
      this.mailingList.push(email);
      return `Почта ${email} добавлена в рассылку.`;
    },
    unsubscribe(email) {
      this.mailingList = this.mailingList.filter((e) => e !== email);
      return `Почта ${email} удалена из рассылки.`;
    },
  };
  function logAndInvokeAction(email, action) {
    console.log(`Выполняем действие с ${email}.`);
    return action(email);
  }
  const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
  console.log(firstInvoke);
  // Почта kiwi@mail.uk добавлена в рассылку.

  console.log(service.mailingList);
  /* ['mango@mail.com', 
      'poly@hotmail.de', 
      'ajax@jmail.net', 
      'kiwi@mail.uk']*/
  const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
  console.log(secondInvoke);
  // Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
  

// При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

//Метод bind используется для привязки контекста при передаче методов объекта как колбэк - функций.