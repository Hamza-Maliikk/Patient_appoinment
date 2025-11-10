import { logoutUser, fetchData } from "./db.js";

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", () => {
  logoutUser();
});

// Doctor dropdown name
const loadDoctors = async () => {
  const doctors = await fetchData();
  
  if (doctors.length === 0) {
    doctorSelect.innerHTML =
      '<option value="" disabled selected>No doctors available</option>';
    return;
  }
  doctorSelect.innerHTML =
    '<option value="" disabled selected>Select Doctor</option>';

  // Doctors ko dropdown mein daalo
  doctors.forEach((doc) => {
    const option = document.createElement("option");
    option.value = doc.id;
    option.textContent = doc.name;
    doctorSelect.appendChild(option);
  });
};

loadDoctors()
