const friends = ['Chuka', 'Lyolyk', 'Stasik', 'Tema'];
const logins = ['Mangik', 'Givi', 'Polys', 'Ajax'];



const findLogin = function (allLogins,loginToFind) {
    return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден `
    : `Пользователь ${loginToFind} не найден `
};

console.log(    findLogin(logins, 'Lyolyk')
);

console.log(
    findLogin(friends,'Lyolyk')
);

// поиск самого маленького числа методом функции 
const findSmallesNumber = function (numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {
        if (number < smallestNumber)
        { smallestNumber = number; }
    }
    return smallestNumber
};
console.log(findSmallesNumber([12, 4, 67, 89, 32, 47, 88, 91]));



// расчет покупки дроидов

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    let totalPrice = pricePerDroid * orderedQuantity;
    let balanceCredit = customerCredits - totalPrice;
    if (totalPrice <= customerCredits) {
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${balanceCredit} кредитов`
    }
    else {
    message = `Недостаточно средств на счету!`
    }
    return message;
};

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));





function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

    switch (password) {
        case null:
            message = 'Отменено пользователем!';
            break;

        case ADMIN_PASSWORD:
            message = 'Добро пожаловать!';
            break;

            default : message = 'Доступ запрещён, неверный пароль!';
    }

  return message;
}

console.log(checkPassword('1jqueryismyjam'));
console.log(checkPassword(null));




function getShippingCost(country) {
    let message;
    let price = 0; 

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

    default : message = 'Извините, в вашу страну доставки нет';
    }
  return message;
};
console.log(getShippingCost('Китай'));
console.log(getShippingCost('Австралия'));
console.log(getShippingCost('Китай'));
console.log(getShippingCost('Ямайка'));
console.log(getShippingCost('Швеция'));



const productName = 'Ремонтный дроид';
console.log(productName[0]); // 'P'
console.log(productName[5]); // 'т'
console.log(productName[14]); // 'д'
console.log(productName[productName.length - 1]);



// функция если приходит разное количество параметров 

const add = function (...args) {
    console.log(args);
    let total = 0;
    for (const arg of args) {
        
        total += arg;
    }
    return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5, 6, 7));


// 
const filterNumbers = function (array, ...args) { 
    console.log('array :',array);
    console.log('args :', args);
    const uniqueElements = [];
    
    for (const element of array) {
        if (args.includes(element))
        {
            uniqueElements.push(element);
            console.log(`${element} есть во всех массивах `);
        }
    }
    // console.log(uniqueElements);
    return uniqueElements;
};


console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 20));
console.log(filterNumbers([10, 15, 25, 30], 10, 15, 2, 30, 20));
console.log(filterNumbers([100, 150, 250, 300], 100, 150, 200, 300, 250));


// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.
function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if (message.length <= maxLength){result = message}
  else{
  
result = message.slice(0, maxLength) + '...';}

// Пиши код выше этой строки
  return result;
};

console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));




// function checkForSpam(message) {
//   let result = message.toLowerCase().includes('sale' ||'spam');

//   return result;
// }



// правильное решение
function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
 if (message.toLowerCase().includes('sale')) {
    result = true;
    console.log(result);
  } else if (message.toLowerCase().includes('spam')) {
    result = true;
    console.log(result);
  } else {
    result = false;
    console.log(false);
  }
  // Пиши код выше этой строки
  return result;
}


console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only tonight!'));
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
console.log(checkForSpam('Trust me, this is not a spam message'));



function checkStorage(available, ordered) {
  // Пиши код ниже этой строки

  if(ordered === 0){
    return 'В заказе еще нет товаров'
  } 
if(available > ordered) {
    return 'Слишком большой заказ, на складе недостаточно товаров!'
  }
return 'Заказ оформлен, с вами свяжется менеджер'
  // Пиши код выше этой строки
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));