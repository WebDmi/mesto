const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.popup_opened');
const close = document.querySelector('.popup__container_close-icon');
const buttclick = document.querySelector('.profile__edit-button');
const saveButton = document.querySelector('popup__container_submit-button.classList');



buttclick.addEventListener('click', function () {
    popup.classList.add('popup_opened');
});

close.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

let formElement = document.querySelector('popup__container');
let nameInput = document.querySelector('popup__container_field-profession');
let jobInput = document.querySelector('popup__container_field-profession');

function handleFormSubmit (evt) {
    evt.preventDefault();
    document.querySelector('nameInput').textContent = profile__name.value;
    document.querySelector('jobInput').textContent = profile__profession.value;
};

close.addEventListener('click', function () {
    popup__container_submit-button.classList.remove('popup_opened');
});
    

formElement.addEventListener('popup__container_submit-button', handleFormSubmit);

