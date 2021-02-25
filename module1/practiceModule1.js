// ""use strict";

// let hobby = "рыбалка";
// console.log(hobby)

// hobby = "хоккей";
// console.log(hobby)

// const message = "Привет, друг! ";
// console.log(message)

// const firstName = typeof 'Chelsy'
// console.log(firstName)

// // имя буля отвечает на вопрос - да или нет 
// const isVip =  true;
// console.log(isVip)

// // const subscrible = confirm("Продлить подписку?")
// // console.log(subscrible)

// // const userInput = prompt("сколько надо ?");
// // console.log(userInput)

// console.log(`${message} меня зовут ${firstName} и мое хобби ${hobby}`)

// const upperCase = message.toUpperCase()
// console.log(upperCase)

// console.log(6 && 7)


const number = 50 
const inRange = number > 20 || number < 70
console.log(`число ${number} попадает в отрезок от 20 до 70`, inRange)



for (let count = 0; count <= 5; count += 1)
{ console.log(`счетчик ${count}`);}




// for (счетчик; условие прекращения работы цикла; пост выражение) { 
//     тело 
// }

for (let i = 5; i <= 80; i += 5)
{ console.log(i); }


let totalSpend = 2000;
let payment = 500;
let discount = 0;

if (totalSpend < 100) {
     console.log(`не партнер скидка 0% `)
}
else if (totalSpend >= 100 && totalSpend < 1000) {
    console.log(`бронзовый партнер скидка 2% `)
    discount = 0.02;
}
else if (totalSpend >= 1000 && totalSpend < 5000)
{
    console.log(`серебренный партнер скидка 5% `)
    discount = 0.05;
}
else if (totalSpend > 5000)
{
    console.log(`золотой партнер скидка 10% `)
    discount = 0.10;
}

payment -= payment * discount;
console.log(
    `оформлен заказ на ${payment}, со скидкой ${discount * 100}%`);

totalSpend += payment;
console.log(`общая сумма потраченная ${totalSpend}`);


