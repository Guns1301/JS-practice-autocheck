/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

const navEl = document.querySelector('.site-nav');
// у каждого элемента есть специальный интерфейс который называается classList, это свойство в котором храниться объект на прототипе у которого есть всякие методы
navEl.classList.add('super-cool');// добавть класс
navEl.classList.remove('site-nav'); //удалить
navEl.classList.toggle('qwerty'); //
navEl.classList.replace('super-cool', 'qwerty');
navEl.classList.contains('qwe'); // есть класс или нет - true / false
