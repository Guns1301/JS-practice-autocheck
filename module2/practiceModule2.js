// массивы - это список, возможность хранить коллекцию однотипных данных. или числа или строки, 
// или массив обьектов
// массив это ячейка памяти
// обьекты, функции, массивы это всегда const

const friends = ['Mangik', 'Givi', 'Polys', 'Ajax'];

console.table(friends)

const lastIndex = friends.length - 1;
console.log('последний индекс = длинна минус один', lastIndex);

console.log(friends[1])

friends[2] = 'Jackson'   //переопределение массива = запись в ту же ячейку что уже существует
console.table(friends)


// перебор массива 
// const lastIndex = friends.length - 1;
for (let i = 0; i <= lastIndex; i += 1){
    friends[i] += '-1';
}


// for .... of - если индекс массива не нужен и изменять элемени массива не нужно

for (const friend of friends){
    console.log(friend)
};



// посчитать общую сумму покупок в корзине 

const cart = [54, 28, 105, 70, 92, 17, 120]
// 2 - сделать переменуую total до цикла
let total = 0;
// 1 - перебрать массив 
for (let i = 0; i < cart.length; i += 1 )
{
    // console.log(cart[i])
    // 3 каждый элемент приплюсовать к total 
    total += cart[i];
};

for (const value of cart) {
    total += value;
}


console.log("Total : ", total);



// напиши скрипт который подсчитывает сумму все х четных чисел в массиве 

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]
// 1- переменная total 
// let total = 0;
//2 -  перебрать массив 
for (let i = 0; i < numbers.length; i += 1){

    // в переменную присвоили значение для лучшей читабельности
    const number = numbers[i]

    console.log(number);

    // 3 - на каждой итерации провереть элемент на четность 
    if (number % 2 === 0) {
        console.log('Четное !!!');
// 4 - если четный плюсуем к total 
        total += number;
    }
}
// лучшее решение если не нужно изменять массив
for (const number of numbers) {
    console.log(number);
    if (number % 2 === 0) {
        console.log('Четное !!!');
        total += number;
    }
}

console.log('сумма четных чисел :', total);






function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
    switch (ADMIN_PASSWORD)
    {
        case 'null':
            ADMIN_PASSWORD === null;
            message = 'Отменено пользователем!';
break;
            
        case 'ADMIN_PASSWORD':
            ADMIN_PASSWORD === ADMIN_PASSWORD;
            message = 'Добро пожаловать!';
 break;
                        
 default: message = 'Доступ запрещен, неверный пароль!';
    

  return message;
    }

    console.log(checkPassword(password))