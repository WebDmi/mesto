


function chekInputValidity(inputElement) {
  const isInpitValid = inputElement.validity.valid;
  if (!isInpitValid) {
    inputElement.classList.add('input__invalid');
  }
}



function setEventListener(formElement) {
  const inputList = formElement.querySelectorAll('.form__input');

  [...inputList].forEach(function (inputElement) {
    inputElement.addEventListener('input', () => {
      chekInputValidity(inputElement);
    })
  });

  formElement.addEventListener('submit', () => {
    console.log('');
  });
};



function enableValidation() {
  const formsList = document.querySelectorAll('.form');

  [...formsList].forEach(function (formElement) {
    setEventListener(formElement);
  });
};

enableValidation();