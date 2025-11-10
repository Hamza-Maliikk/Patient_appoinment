import { signupUser } from "./db.js";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById("signup_email").value;
  const password = document.getElementById("signup_password").value;
  const name = document.getElementById("name").value;

  const SignupResponse = await signupUser(email, password, name);
  if (SignupResponse.user) {
    alert("signup successfull");
    window.location.href = "./login.html";
  } else {
    alert(SignupResponse.message);
  }
});


