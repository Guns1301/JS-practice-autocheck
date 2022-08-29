/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit); // для того что б не ссылаться на внешиние переменные и в функции  onFormSubmit получить доступ к form то есть свойсвто event.currentTarget

function onFormSubmit(event) {
  event.preventDefault(); // для того чтоб страница не перезагружалась

  console.log(event.currentTarget);
  console.dir(event.currentTarget);// это объект и у него есть свойства - например elements: HTMLFormControlsCollection(6)
  console.dir(event.currentTarget.elements.subscription.value);


  const formData = new FormData(event.currentTarget);// свойство .currentTarget на объекте события ссылается на тот элемент который прослушивает это событие - то есть в данном случае на form 

  console.log(formData);

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}