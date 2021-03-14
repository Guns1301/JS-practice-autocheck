// замыкание
// функция результатом свой работы может возвращать другой функцию.  
// возвращаемая функция во время вызова будет иметь доступ ко всем локальным переменным(области видимости) родительской функции (той из которой ее вернули)

const MakeCheff = function (nameCheff) {
    
    const MakeDish = function (dish) {
        console.log(`повар ${nameCheff} готовит на завтрак ${dish}`);
    };

    return MakeDish;
};
// когда мы вызываем функцию MakeCheff , она возвращает внутреннюю свою функцию 
// получается в переменую Тема возвращается маленькая функция (внутрення) - MakeDish
const Tema = MakeCheff('Артем Мариничев');
const Blondy = MakeCheff('Блондин');
const Fish = MakeCheff('Александр Рыбка');
// концепция замыкания
// если  одну функцию возвращаете из другой функции , то при вызове возвращенной функции она имеет доступ ко всем переменным родительской
Tema('обед');
Tema('афганский бульйон');
Blondy('танец');
Fish('побег');
console.dir(Tema);




const salaryManagerFactory = function (name, salary = 0) { 
    
    return {
        raise(amount) {
            
            if (amount > 5000) {
                return 'Чувачок !! соблюдай субординацию !!';
            }
            salary += amount;
        },
        lower(amount) {
            salary -= amount
        },
        current() {
            return `Текущая зарплата ${name} - ${salary}`
        }
}

};

const salaryManager = salaryManagerFactory('Сергей Лялин', 5000);

console.log(salaryManager.current());
salaryManager.lower(2500);

console.log(salaryManager.current());
salaryManager.raise(1000);

console.log(salaryManager.raise(20000));
console.log(salaryManager.current());




// Стрелочные Функции 
// обычная функция
const add = function (a, b, c){

    console.log(a,b,c);
    return a + b + c;
};
console.log(add(5, 10, 15));

// стрелочная

const addNumbers = (x, y, z) => {
    
    console.log(x, y, z);
    // явный возврат 
    // если указан явно return
    return x + y + z;
};
console.log(addNumbers(15, 130, 150));

// неявный возврат 
//  без {} для тела функции
const multiply = (x, y, z) => x * y * z;
console.log(multiply(15, 100, 15));



// контекст this 

const showTag = function () { 

    console.log('Show -> this', this);
    console.log('Show -> this.tag', this.tag);
}
    ;

const user = {
    tag: 'Mango',
};

user.showUserTag = showTag;
console.log('user:', user);

user.showUserTag();

const userUpdate = {
    tag: 'Gloria',
};
// присвоить объекту функцию 
userUpdate.showUserTag = showTag;
userUpdate.showUserTag();


// callback 
// делай математику
const DoMath = function (a, b, callback) {
    
    const result = callback(a, b);
    console.log(result);
    
};

const sum = function (c, d) {
    return c + d;
};


const sub = function (c, d) {
    return c - d;
}

DoMath(5, 15, sum);
DoMath(10, 3, sub);

// дай мне свои колбэки 
const onGetPositionSuccess = function (position) {
    console.log(' вызов onGetPositionSuccess');
    console.log(position);
};

const onGetPositionError = function (error) {
    console.log(error);
};

window.navigator.geolocation.getCurrentPosition (
    onGetPositionSuccess,
onGetPositionError,
);

// фильтрация 

const filter = function (array, test) {

    const filtredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);
        if (passed) {
            filtredArray.push(el);
        }
    }
    return filtredArray;
};

// 1 = надо передать функцию
// 2 функция получает эллемент массива 
// 3 если эллемент массива удовлетворяет условию то функция вернет true 
// 4 если эллемент массива НЕ удовлетворяет условию то функция вернет false 

const callback1 = function (value) {
    return value >= 3;
    // операторы сравнения возвращают true или false сами по себе
};


const r1 = filter([1, 2, 3, 4, 5], callback1); //передаем в фильтер  функцию колбэк как второй аргумент
console.log(r1)
// 
const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    return value <= 4;
}
);
console.log(r2)

const fruits = [
    {name: 'apple', quantity:200, isFresh: true},
    {name: 'mango', quantity:150, isFresh: false},
    {name: 'bananas', quantity:100, isFresh: true},
]


// реиспользуемая логика 
const getFruitWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
}

const r3 = filter(fruits, getFruitWithQuantity);
console.log(r3)


// this 
