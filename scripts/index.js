
const popupOpened = document.querySelector('.popup_opened');
const closeButton = document.querySelector('.popup__close-icon');
const popupProfile = document.querySelector('.popup-profile');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
// const closeButtonProfile = popupProfile.querySelector('.popup__close-icon');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupPlace = document.querySelector('.popup-place');
const namePopupPlace = popupPlace.querySelector('.popup-place__field-place');
const imagePopupPlace = popupPlace.querySelector('.popup-place__field-photo');
const buttonAdd = document.querySelector('.profile__add-button');
// const closeButtonPlace = popupPlace.querySelector('.popup__close-icon');
const popupPhoto = document.querySelector('.popup-photo');
const imagePopupPhoto = popupPhoto.querySelector('.popup-photo__image');
const namePopupPhoto = popupPhoto.querySelector('.popup-photo__name');
// const closeButtonPhoto = popupPhoto.querySelector('.popup__close-icon');

const formProfileElement = document.querySelector('.popup-profile__container');
const formPlaceElement = document.querySelector('.popup-place__container')
const nameInput = formProfileElement.querySelector('.popup-profile__field-name');
const jobInput = formProfileElement.querySelector('.popup-profile__field-profession');

const elementsPlace = document.querySelector('.elements__places');
const templateElement = document.querySelector('#element-template').content.querySelector('.element');
const placePhoto = templateElement.querySelector('.element__mask-group');
const placeName = templateElement.querySelector('.element__name');

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function closeOverlay(evt) {
  if (
    evt.currentTarget === evt.target ||
    evt.target.classList.contains('.popup__close-icon')
  ); {
    closePopup(evt.currentTarget);
  }
};

popupProfile.addEventListener('click', closeOverlay);
popupPlace.addEventListener('click', closeOverlay);
popupPhoto.addEventListener('click', closeOverlay);


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
};

formProfileElement.addEventListener('submit', handleProfileFormSubmit);

// открытие попапа места
buttonAdd.addEventListener('click', () => {
  openPopup(popupPlace);
});

// создание карточек
formPlaceElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const imageNewPlace = imagePopupPlace.value;
  const nameNewPlace = namePopupPlace.value;
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
