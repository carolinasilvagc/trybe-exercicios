const submitButton = document.querySelector("#submit");
const clearButton = document.querySelector("#reset");
const agreeImages = document.querySelector("#agree-images");
const nameField = document.querySelector("#person-name");
const emailField = document.querySelector("#person-email");
const textareaField = document.querySelector("#person-answer");

window.onload = function () {
  submitButton.addEventListener("click", handleSubmit);
  clearButton.addEventListener("click", clearFields);
  agreeImages.addEventListener("change", submitInformation); 
}

function handleSubmit(event) {
  event.preventDefault();

  const validation = textValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip!');
  }
};

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    if(formElements[index].type === 'radio' || formElements[index].type === 'checkbox'){
      userInput.checked = false;
    } else {
      userInput.value = '';
    }
  }
  textArea.value = '';
}

function submitInformation() {
  submitButton.disabled = !agreeImages.checked;
}

function textValidation() {
  const email = emailField.value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = nameField.value.length;
  const invalidName = name < 10 || name > 40;

  const textarea = textareaField.value.length;
  const invalidTextarea = textarea > 500;

  if (invalidEmail || invalidName || invalidTextarea) {
    return false;
  } else {
    return true;
  }
}