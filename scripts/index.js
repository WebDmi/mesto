
const popupOpened = document.querySelector('.popup_opened');
const popupProfile = document.querySelector('.popup-profile');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupPlace = document.querySelector('.popup-place');
const buttonSavePlace = popupPlace.querySelector('.popup__submit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const popupPhoto = document.querySelector('.popup-photo');
const imagePopupPhoto = popupPhoto.querySelector('.popup-photo__image');
const namePopupPhoto = popupPhoto.querySelector('.popup-photo__name');
const elementsPlace = document.querySelector('.elements__places');
const templateElement = document.querySelector('#element-template').content.querySelector('.element');
const placePhoto = templateElement.querySelector('.element__mask-group');
const placeName = templateElement.querySelector('.element__name');

const formProfile = document.querySelector('.popup-profile__container');
const nameInput = formProfile.querySelector('.popup-profile__field-name');
const jobInput = formProfile.querySelector('.popup-profile__field-profession');

const formPlace = document.querySelector('.popup-place__container');
const namePlace = formPlace.querySelector('.popup-place__field-place');
const imagePlace = formPlace.querySelector('.popup-place__field-photo');

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};

function closeOverlay(evt) {
  if (
    evt.currentTarget === evt.target ||
    evt.target.classList.contains('popup__close-icon')
  ) {
    closePopup(evt.currentTarget);
  }
};

// закрытие попапа черех иконку-крестик
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('mousedown', closeOverlay);
});

// закрытие попапа через Esc
function closePopupEsc(evt){
  if(evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
};

// открытие попапа профиля
buttonEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

// внесение изменений в блок профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProfile);
};

formProfile.addEventListener('submit', handleProfileFormSubmit);

// открытие попапа места
buttonAdd.addEventListener('click', () => {
  disableButton(buttonSavePlace, config);
  openPopup(popupPlace);
});

// создание карточек
formPlace.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const imageNewPlace = imagePlace.value;
  const nameNewPlace = namePlace.value;
  renderInitialCard({ name: nameNewPlace, link: imageNewPlace }, elementsPlace);
  closePopup(popupPlace);
  evt.target.reset();
});

// отображение карточек из массива
function createPlaceCard({ name, link }) {
  const cardPlace = templateElement.cloneNode(true);
  const placeName = cardPlace.querySelector('.element__name');
  const placePhoto = cardPlace.querySelector('.element__mask-group');
  placeName.textContent = name;
  placePhoto.src = link;
  placeName.alt = name;

  // удаление карточек
  const deleteButtonCard = cardPlace.querySelector('.element__trash');
  deleteButtonCard.addEventListener('click', () => {
    cardPlace.remove();
  });

  // кнопка лайка
  const likeButton = cardPlace.querySelector('.element__group');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__group_active');
  });

  // открытие попапа с большим фото
  placePhoto.addEventListener('click', () => {
    openPopup(popupPhoto);
    imagePopupPhoto.src = link;
    namePopupPhoto.alt = name;
    namePopupPhoto.textContent = name;
  });

  return cardPlace;
};

// создание новых карточек
function renderInitialCard(data, container, position = 'prepend') {
  switch (position) {
    case 'prepend':
      container.prepend(createPlaceCard(data));
      break;
    case 'append':
      container.append(createPlaceCard(data));
      break;
    default:
      break;
  }
};


initialCards.forEach(function (item) {
  renderInitialCard(item, elementsPlace, 'append');
});
