// Jose Venerio-Santamaria
// 3/4/2025
// JavaScript code for form validation
// Prevent form from submitting
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submission prevented.');
});
// Retrieve the input field value
// Using getElementById
const inputElementById = document.getElementById('inputId');
const inputValueById = inputElementById.value;

// Regular expression pattern for alphanumeric input
const alphanumericRegex = /^[a-zA-Z0-9]+$/;

// Check if the input value matches the pattern
const inputElement = document.getElementById("myInput");
const inputValue = inputElement.value;
const pattern = /^[a-zA-Z0-9]+$/;
const matchesPattern = pattern.test(inputValue);

if (matchesPattern) {
  console.log("Input value matches the pattern.");
} 
else {
  console.log("Input value does not match the pattern.");
}
// Valid input: display confirmation and submit the form
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  const confirmation = confirm('Are you sure you want to submit the form?');
  if (confirmation) {
    form.submit();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Invalid input: display error message
const inputField = document.getElementById('myInput');
const errorElement = document.getElementById('inputError');

inputField.addEventListener('input', function() {
  const inputValue = inputField.value;

  if (inputValue === '' || isNaN(inputValue)) { // Example validation: Check if empty or not a number
    errorElement.textContent = 'Invalid input. Please enter a number.';
  } else {
    errorElement.textContent = ''; // Clear error message
  }
});