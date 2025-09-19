const registrationForm = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const emailMessage = document.getElementById("emailMessage");

if (registrationForm) {
if (passwordInput && confirmPasswordInput) {
  function validatePasswords() {
    if (confirmPasswordInput.value.length === 0) {
      confirmPasswordInput.style.border = "1px solid #ccc"; 
    } else if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordInput.style.border = "2px solid red"; 
    } else {
      confirmPasswordInput.style.border = "2px solid green"; 
    }
  }
  // check on every keystroke
  passwordInput.addEventListener("input", validatePasswords);
  confirmPasswordInput.addEventListener("input", validatePasswords);
}

// show password
if (passwordInput && togglePassword) {
  togglePassword.addEventListener("click", function () {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    // optional: change SVG color when visible
    if (type === "text") {
      togglePassword.querySelector("path").setAttribute("fill", "#4CAF50"); // green when visible
    } else {
      togglePassword.querySelector("path").setAttribute("fill", "#A2A7B7"); // gray when hidden
    }
  });
}

// show confirmPassword
if (confirmPasswordInput && toggleConfirmPassword) {
  toggleConfirmPassword.addEventListener("click", function () {
    const type = confirmPasswordInput.type === "password" ? "text" : "password";
    confirmPasswordInput.type = type;

    // optional: change SVG color when visible
    if (type === "text") {
      toggleConfirmPassword.querySelector("path").setAttribute("fill", "#4CAF50"); // green when visible
    } else {
      toggleConfirmPassword.querySelector("path").setAttribute("fill", "#A2A7B7"); // gray when hidden
    }
  });
}

// ✅ Live email validation
if (emailInput && emailMessage) {
  emailInput.addEventListener("input", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value === "") {
      emailMessage.textContent = "";
    } else if (!emailPattern.test(emailInput.value)) {
      emailMessage.textContent = "Invalid email format";
      emailMessage.style.color = "red";
    } 
    else {
      emailMessage.textContent = "";
    }
  });
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    
    // Redirect to the new page with the user information
    const queryString = `?firstName=${encodeURIComponent(
      firstName
    )}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(
      email
    )}`;
    window.location.href = "login.html" + queryString;
  });
}
else{
const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get("firstName");
const lastName = urlParams.get("lastName");
const email = urlParams.get("email");

// Display the user information
document.getElementById("firstName").textContent = firstName;
document.getElementById("lastName").textContent = lastName;
document.getElementById("email").textContent = email;
}