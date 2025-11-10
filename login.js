// login.js
import { signinUser } from "./db.js";

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const loginResponse = await signinUser(email, password);
  console.log("signin result:", loginResponse);

  // Check explicit fields instead of truthiness
  if (!loginResponse || !loginResponse.user) {
    // show the error message if provided
    const msg = loginResponse && loginResponse.error ? loginResponse.error : "Invalid email or password";
    alert(msg);
    return;
  }

  alert("Signin successful");
  setTimeout(() => {
    window.location.href = "./bootappoinment.html";
  }, 1000);
});
