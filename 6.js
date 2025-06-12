document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  clearErrors();

  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (name === '') {
    document.getElementById('nameError').style.display = 'block';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById('passwordError').style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('successMessage').textContent = "✅ Registration successful!";
    this.reset();
  }
});

function clearErrors() {
  document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
  document.getElementById('successMessage').textContent = '';
}