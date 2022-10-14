const errorMessage = document.querySelector('.error');
const emailInput = document.querySelector('input[type="email"]');

function formSubmit() {
  const regex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  const email = emailInput.value;
  if (!regex.test(email)) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'The email should only content lowercase letters';
    return ('false');
  }
  return ('true');
}

const form = document.querySelector('.form-form');
form.addEventListener('submit', formSubmit);

emailInput.addEventListener('focus', () => {
  errorMessage.style.display = 'none';
});

// local storage

const userName = document.querySelector('.text-input');
const messageInput = document.querySelector('textarea');

form.addEventListener('input', () => {
  const formData = {
    name: userName.value,
    email: emailInput.value,
    messageInput: messageInput.value,
  };

  localStorage.setItem('contactFormInput', JSON.stringify(formData));
});

let savedFormData = localStorage.getItem('contactFormInput');
savedFormData = JSON.parse(savedFormData);

if (savedFormData != null) {
  userName.value = savedFormData.name;
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.messageInput;
}