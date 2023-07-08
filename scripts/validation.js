
const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'input__invalid',
};


// Находим все формы и перебираем их
function enableValidation(config) {
  const formsList = document.querySelectorAll(config.formSelector);

  [...formsList].forEach(function (formElement) {
    setEventListener(formElement, config);
  });
};

enableValidation(config);

// общая функция проверки валидности формы (включая кнопку сохранения)
function setEventListener(formElement, config) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(submitButtonElement,
    formElement.checkValidity(),
    config
  );

  [...inputList].forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      toggleButtonState(submitButtonElement,
        formElement.checkValidity(),
        config);
      checkInputValidity(inputElement, formElement);
    })
  });

  // Вешаем обработчик события submit на каждую форму в переборе
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!formElement.checkValidity()) return;
  });
};

// показ ошибки заполнения инпута
function showError(inputElement, errorElement, config) {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

// удаление показа ошибки показания инпута
function hideError(inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.textContent = '';
};

// две функции изменения кнопки сохранить при валидации
function disableButton(buttonElement, config) {
  buttonElement.disabled = 'disabled';
  buttonElement.classList.add(config.inactiveButtonClass);
};

function enableButton(buttonElement, config) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
};

// функция проверки валидности 
function checkInputValidity(inputElement, formElement) {
  const isInpitValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!isInpitValid) {
    showError(inputElement, errorElement, config)
  }
  else {
    hideError(inputElement, errorElement, config)
  }
};

// функция изменения активности кнопки сохранить при вводе данных в форму
function toggleButtonState(buttonElement, isActive, config) {
  if (!isActive) {
    disableButton(buttonElement, config);
  }
  else {
    enableButton(buttonElement, config);
  }
};