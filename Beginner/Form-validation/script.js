const form = document.getElementById("regForm");
const student = document.getElementById("student");
const father = document.getElementById("father");
const dob = document.getElementById("dob");
const mobileNum = document.getElementById("mobileNum");
const email = document.getElementById("email");
const password = document.getElementById("password");
const photo = document.getElementById("photo");
const city = document.getElementById("city");
const address = document.getElementById("address");

//add event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validate()) {
    form.submit();
  }
});
function showError(input, msg) {
  input.parentElement.querySelector(".error").innerText = msg;
}
function clearError(input) {
  input.parentElement.querySelector(".error").innerText = "";
}
//define the validate function
const validate = () => {
  let valid = true;
  const nameRegex = /^[A-Za-z ]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;
  //student name
  if (student.value.trim() === "") {
    showError(student, "This field is required");
    valid = false;
  } else if (!nameRegex.test(student.value.trim())) {
    showError(student, "Only alphabets allowed");
    valid = false;
  } else {
    clearError(student);
  }
  //Father Name
  if (father.value.trim() === "") {
    showError(father, "This field is required");
    valid = false;
  } else if (!nameRegex.test(father.value.trim())) {
    showError(father, "Only alphabets allowed");
    valid = false;
  } else {
    clearError(father);
  }
  //dob

  if (dob.value.trim() === "") {
    showError(dob, "This field is required");
    valid = false;
  } else {
    clearError(dob);
  }
  // email
  if (email.value.trim() === "") {
    showError(email, "This field is required");
    valid = false;
  } else {
    clearError(email);
  }

  //mobile
  if (isNaN(mobileNum.value)) {
    showError(mobileNum, "Enter number only");
    valid = false;
  } else if (!mobileRegex.test(mobileNum.value)) {
    showError(mobileNum, "Enter valid mobile number");
    valid = false;
  } else {
    clearError(mobileNum);
  }
  //password
  if (password.value.length < 6) {
    showError(password, "Password must be atleast 6 characters");
    valid = false;
  }
  //department
  const dept = document.querySelectorAll('input[type="checkbox"]:checked');
  const deptError = document.getElementById("deptError");
  if (dept.length === 0) {
    deptError.innerText = "Select at least one department";
    valid = false;
  } else {
    deptError.innerText = "";
  }
  //gender
  const gender = document.querySelector('input[name = "gender"]:checked');
  const genderError = document.getElementById("genderError");
  if (!gender) {
    genderError.innerText = "Select gender";
    valid = false;
  } else {
    genderError.innerText = "";
  }
  //photo
  if (!photo) {
    console.error(photo, "photo input not found");
    valid = false;
  } else if (photo.files.length === 0) {
    showError(photo, "Please upload photo");
    valid = false;
  } else {
    const file = photo.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      showError(photo, "Only JPG,JPEG,PNG allowed");
      valid = false;
    }
  }
  //city
  if (city.value.trim() === "") {
    showError(city, "This field is required");
    valid = false;
  } else {
    clearError(city);
  }
  //address
  if (address.value.trim() === "") {
    showError(address, "This field is required");
    valid = false;
  } else {
    clearError(address);
  }
  return valid;
};
