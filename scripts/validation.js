


function showError(inputElement, errorElement) {
  inputElement.classList.add("input__invalid");
  errorElement.textContent = inputElement.validationMessage;
}


function hideError(inputElement, errorElement) {
  inputElement.classList.remove("input__invalid");
  errorElement.textContent = inputElement.validationMessage;
}

function checkInputValidity(inputElement, formElement) {
  const isInpitValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!isInpitValid) {
    showError(inputElement, errorElement)
  }
  else {
    hideError(inputElement, errorElement)
  }
}

// function toggleButtonState(buttonElement, isActive) {
//   if (!isActive.validity) {
//     buttonElement.disabled = 'disabled';
//     buttonElement.classList.add('.popup__submit-button_disabled');
//   }
//   else {
//     buttonElement.disabled = false;
//     buttonElement.classList.remove('.popup__submit-button_disabled');
//   }
// }



function setEventListener(formElement) {
  const inputList = formElement.querySelectorAll(".form__input");
  // const submitButtonElement = formElement.querySelector('.popup__submit-button');

  // toggleButtonState(submitButtonElement, formElement.checkValidity());

  [...inputList].forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, formElement);
    })
  });

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!formElement.checkValidity()) return;
      console.log("Проверка отправки формы");
  });
};



function enableValidation() {
  const formsList = document.querySelectorAll(".form");

  [...formsList].forEach(function (formElement) {
    setEventListener(formElement);
  });
};

enableValidation();