// module 1 18/36
// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;

  const totalPrice = pricePerDroid * orderedQuantity;

  if (customerCredits < totalPrice) {
    message = 'Insufficient funds!';
  } else if (customerCredits >= totalPrice) {
    //   переопределить значение customerCredits
    customerCredits = customerCredits - totalPrice;

    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
  }

  return message;
}

makeTransaction(3000, 5, 23000);

// 19/36
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Canceled by user!';
  } else if (ADMIN_PASSWORD === password) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

// 20/36

function checkStorage(available, ordered) {
  let message;

  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }
  return message;
}

// 21/36
//Если хотя бы один из операндов будет приведён к false, результатом выражения будет этот операнд.
//То есть логическое «И» запинается на лжи и возвращает то, на чём запнулось или последний операнд.

// *Полезно Запомните шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  return isInRange;
}

// 22/36
// Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к true, и правый в остальных случаях.
// То есть логическое «ИЛИ» запинается на правде и возвращает то, на чём запнулось или последний операнд.

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';
  return canAccessContent;
}

// 23/36
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;

  return isNotInRange;
}

// 24/36
// от 0 до 5000 - 0%
// от 5000 до 20000 - 2%
// от 20000 до 50000 - 5%
// от 50000 и больше - 10%

// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.
// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;

  if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  return discount;
}

// 25/36

// ! Внимание Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Применять его для замены сложных ветвлений — плохая практика (антипаттерн).

// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.
//** */ <условие> ? <выражение если условие истинно> : <выражение если условие ложно>

function checkStorage(available, ordered) {
  let message;
  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';

  return message;
}

// 26/36

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  message =
    password === ADMIN_PASSWORD
      ? 'Access is allowed'
      : 'Access denied, wrong password!';
  return message;
}

// 27/36
// !
//  switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;
// }
// !
function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case 'starter':
      price = 0;
      break;
    case 'professional':
      price = 20;
      break;

    case 'organization':
      price = 50;
      break;
  }

  return price;
}

// 28/36

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case (password = null):
      message = 'Canceled by user!';
      break;

    case (password = ADMIN_PASSWORD):
      message = 'Welcome!';
      break;

    default:
      message = 'Access denied, wrong password!';
  }

  return message;
}

// 29/36

function getShippingCost(country) {
  let message;

  let price;

  switch (country) {
    case 'Китай':
      price = 100;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case 'Чили':
      price = 250;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case 'Австралия':
      price = 170;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case 'Ямайка':
      price = 120;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    default:
      message = 'Извините, в вашу страну доставки нет';
  }

  return message;
}
getShippingCost('Ямайка');

// 31/36
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.
// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.
const courseTopic = 'JavaScript essentials';

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

//
//** */ 32/36 Метод slice()
// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.
function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}
getSubstring('Hello world', 8);

// 33/36
// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.
// Дополни код функции так, что если длина строки:
// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
function formatMessage(message, maxLength) {
  let result;

  result =
    message.length <= maxLength ? message : message.slice(0, maxLength) + '...';

  return result;
}

// 36/36
// ! includes используется только в том случае когда нужно проверить есть ли в массиве примитивов какой то примитив

function checkForSpam(message) {
  let result;
  message = message.toLowerCase();
  result = message.includes('spam') || message.includes('sale');
  return result;
}
