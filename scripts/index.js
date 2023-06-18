const popup = document.querySelector('popup');
const popupProfile = document.querySelector('.popup-profile');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const closeButtonProfile = popupProfile.querySelector('.popup__close-icon');
const buttonEdit = document.querySelector('.profile__edit-button');
const likebutton = document.querySelector('.element__group');
const popupPlace = document.querySelector('.popup-place');
const buttonAdd = document.querySelector('.profile__add-button');
const closeButtonPlace = popupPlace.querySelector('.popup__close-icon');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


let formProfileElement = document.querySelector('.popup-profile__container');
let formPlaceElement = document.querySelector('.popup-place__container')
let nameInput = document.querySelector('.popup-profile__field-name');
let jobInput = document.querySelector('.popup-profile__field-profession');
let placeInput = document.querySelector('.popup-place__field-place');
let photoInput = document.querySelector('.popup-place__field-photo');


function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

// открытие попапа профиля
buttonEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

// // внесение изменений в блок профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProfile);
};

// закрытие попап профиля
closeButtonProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

formProfileElement.addEventListener('submit', handleProfileFormSubmit);

// открытие попапа места
buttonAdd.addEventListener('click', () => {
  openPopup(popupPlace);
});

// закрытие попап профиля через Enter
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupPlace);
};

// закрытие попап профиля через значок закрытия
closeButtonPlace.addEventListener('click', () => {
  closePopup(popupPlace);
});

formPlaceElement.addEventListener('submit', handlePlaceFormSubmit);

















// likebutton.addEventListener('click', function (evt) {
//   evt.target.classList.toggle('element__group_active');
// });