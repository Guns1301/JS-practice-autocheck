/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = { // объект ссылок
    input: document.querySelector('.js-input'),
    // тоже самое что - const input = document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
  console.log('Инпут потерял фокус - событие blur');
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value // event.currentTarget.value берет значение из формы и заменяет его по ссылке;
}
// onLicenseChange  - обработчик события 
function onLicenseChange(event) {
    //console.log(event.currentTarget.checked); // свойство checked - возвращает буль -выбран/не выбран 
  refs.btn.disabled = !event.currentTarget.checked;// event.currentTarget в обработчике события - это ссылка на элемент на котором лежит слушатель. а потом просто запомнить value у инпутов, checked - у радиобаттонов, textContent у текстовых полей (обзацы ,спаны) 
}