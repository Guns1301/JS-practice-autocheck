// Объектная модель документа (DOM)

/*
 * Создаём заголовок
 */

const titleEl = document.createElement('h1');// создается в памяти , добавляется позже
titleEl.classList.add('page-title');
titleEl.textContent = 'это заголовок страницы';
console.log(titleEl);


// добавление на страницу
/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */


/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img'); //указать валидный тэг 
imageEl.src = "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageEl.alt = "valais-alpine-mountains-glacier";
imageEl.width = 640;

console.log('imageEl :', imageEl);

document.body.appendChild(imageEl); // Вставка узлов: appendChild(elem)


/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');


const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.href = '/profile';
navLinkEl.textContent = 'Личный кабинет';


navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');

//navEl.appendChild(navItemEl);


//  insertBefore(elem, nextSibling)
navEl.insertBefore(navItemEl, navEl.firstElementChild);
//navEl.insertBefore(navItemEl, navEl.children[1]);
//navEl.insertBefore(navItemEl,null);
//navEl.insertBefore(navItemEl,navEl.ElementChild)



// современный метод добавления в DOM за одну операцию 
// append(...elems)  prepend(...elems) - передать произвольное количесвто элементов 

// heroEl.append(titleEl, imageEl) порядок важен
// для вставки можества независимых элементов в один узел