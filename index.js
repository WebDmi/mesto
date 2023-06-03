const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const close = document.querySelector('.popup__close-icon');
const buttclick = document.querySelector('.profile__edit-button');
const saveButton = document.querySelector('.popup__submit-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__field-name');
let jobInput = document.querySelector('.popup__field-profession');

buttclick.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
};

close.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

formElement.addEventListener('submit', handleFormSubmit);
