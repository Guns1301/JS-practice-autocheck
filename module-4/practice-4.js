// замыкание

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