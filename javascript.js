let password = document.getElementById("password")
let confirm_password = document.getElementById("confirm_password")

const match_error = document.getElementById("match")

function validatePassword(){
  if (password.value != confirm_password.value) {
    password.setCustomValidity("Error: Passwords do not match");
    match_error.textContent = "* Passwords do not match";
  } else {
    password.setCustomValidity("");
    match_error.textContent = "";
  }
};

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;