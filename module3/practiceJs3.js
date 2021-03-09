// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан', 'слива','арбуз'];
// Пиши код ниже этой строки
const lastElementIndex = fruits.length -1


const lastElement = fruits[fruits.length -1]

console.log(fruits);
console.log(lastElement);
console.log(lastElementIndex);



// распыление массивов
const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4,5,6];
const nextWeekTemps = [7, 8, 9];
// spread 
const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
console.log(allTemps);
// concat = тоже самое
const allT = lastWeekTemps.concat(currentWeekTemps, nextWeekTemps);



// распыление объектов

const a = { x: 1, y: 2, };
const b = { x: 0, z: 3 };

// старый метод 
// const с = Object.assign({}, a, b);
// первым передаем тот объект куда распылить , а следующими передаем те объекты которые хотите туда распылить 
// const с = {} ; Object.assign(c, a, b); = таже самая запись

// модный способ 

const с = {
    ...a,
    ...b,
};



// Деструктуризация 
const playlist = {

    name: 'мой плейлист',
    rating: 5,
    tracks: [ 'track-1', 'track-2', 'track-3'],
    trackCount: 3,
    
};

const { name, rating, tracks, trackCount : numberOfTracks = 0, author = 'Слэш' } = playlist;
// если нужно присвоить значение по умолчанию то пищем значение автор = равно и значение свойства
// что бы переименовать переменную trackCount : numberOfTracks
// буквально в локальную переменную numberOfTracks положи значение trackCount из объекта playlist
// если нужно задать дефолтное значение = 0 
console.log(playlist);


// глубокая деструктуризация 

const profile = {

    nameUser: 'Mango',
    nickname: 'givi1122',
    location: 'Odessa, Ukraine',

    avatar: null,
        stats : {
        likes: 5,
        followers: 12,
    }
};

const { nameUser, location, stats: { likes,followers } } = profile
// followers : myFollowers = 7
console.log(profile);



// Деструктуризация массивов 

const rgb = [255, 100, 80];

 const [x, y, z] = rgb;
// если нужно пропустить свойство - ставиться запятая и пробел в том месте 


const authors = {
    kiwi: 5 ,
    poly: 7,
    ajax: 8,
    mango : 11,
};

const entries = Object.entries(authors);

for (const entry of entries ) {
    const [nameAuthors, ratingAuthors] = entry
};

console.log(authors)
console.table(authors);


// операция REST - сбор 

const file = {

    user: 'Mango',
    location: 'Odessa, Ukraine',

    avatar: null,
        stats : {
        likes: 158,
        followers: 512,
    }
};

const { user, location :currentLocation, ...resT } = file;

console.log(user, location);
console.log(resT)



// Паттерн "Объект Настроек"

const showProfileInfo = function ({ nameUser, location, nickname, stats: { likes, followers } }) {  
 console.log( nameUser, nickname, location)
};
 
showProfileInfo(profile);
