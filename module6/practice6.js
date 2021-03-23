const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
//Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.
const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);



const players = [
{id: 'player-1', name: 'mango', timePlayed: 210, points: 77, online: true,},
{id: 'player-2', name: 'kiwi', timePlayed: 460, points: 67, online: false,},
{id: 'player-3', name: 'poly', timePlayed: 710, points: 97, online: true,},
{id: 'player-4', name: 'chelsy', timePlayed: 810, points: 37, online: true,},
{id: 'player-5', name: 'ajax', timePlayed: 210, points: 88, online: false,}
];

// map всегда возвращает массив той же длинны. map используется для обновления. вытянуть что то , или обновить элемент - все или один 
const updatePlayers = players.map((player) => {
    console.log(player);
    return {
        ...players,
        points: player.points * 1.1
    };
    // map позволяет выполнить однотипную операцию для всех элементов в коллекции
});
// на место каждого объекта мы возвращаем  в новый массив новый объект в который распыляем старый объект и просто заменяем значение свойства points
// 1. вернули новый объект
// 2. распылили в него старый объект
// 3. и подменили у него свойство points
// console.table(updatePlayers);


const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player => {
    if (playerIdToUpdate === player.id) {
        console.log('вот мы нашли того кого нужно обновить');
    // если нужно обновить , то возвращаем новый объект в который распыляем старый и изменяем нужное значение свойства
        return {
            ...player,
            timePlayed: player.timePlayed + 1000
        };
    }
        return player; //если ничего обновлять не нужно , просто возвращаем старый объект
});
console.table(updatePlayers);
console.log(playerIdToUpdate);


// решение с помощью тернарного оператора
// const updatedPlayers = players.map(player => {
//     return playerIdToUpdate === player.id ?
//         {
//         ...player,
//         timePlayed: player.timePlayed + 1000
//     } : player;
// });


/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */
const numbers = [5, 10, 15, 20, 25];
const filterNumbers = numbers.filter(number => {
    console.log(number);

   return number > 14;
});

console.log(filterNumbers);
    

const onlinePlayers = players.filter(player => player.online);
console.table(onlinePlayers);

const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

const hardcorePlayer = players.filter(player => player.timePlayed > 250);
console.table(hardcorePlayer);


/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

// const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 10);
console.log(number);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// Ищем игрока по id

const playerIdToFind = 'player-3';
const playerWithId = players.find(({ id }) => id === playerIdToFind);
console.log(playerWithId);

const finPlayerById = (allPlayer, playerId) => {
  return allPlayer.find(player => player.id === playerId);
};

console.log(finPlayerById(players, 'player-1'));
console.log(finPlayerById(players, 'player-4'));

/*
  Ищем игрока по имени
 */
const playerNameToFind = 'Poly';
const playerWithName = players.find(player => player.name === playerNameToFind);
console.log(playerWithName);


/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */
const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
console.log('anyHardcorePlayers: ', anyHardcorePlayers);