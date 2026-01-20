const buttons = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");
const displayInput = document.querySelector(".display-input");
const displayResult = document.querySelector(".display-result");
let expression = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    //AC
    if (value === "AC") {
      expression = "";
      displayInput.value = "";
      displayResult.value = "";
      display.classList.remove("active");
      return;
    }
    //DEL
    if (value === "DEL") {
      expression = expression.slice(0, -1);
      displayInput.value = expression;
      if (expression.length === 0) {
        display.classList.remove("active");
        displayResult.value = "";
      } else {
        calculate();
      }
      return;
    }
    if (value === "00") {
      if (expression !== "") {
        expression += "00";
        displayInput.value = expression;
        display.classList.add("active");
        calculate();
      }
      return;
    }
    // =
    if (value === "=") {
      try {
        expression = evaluate(expression);
        displayInput.value = expression;
        displayResult.value = "";
      } catch {
        displayResult.value = "Error";
      }
      return;
    }
    //Operator mapping
    if (value === "×") expression += "*";
    else if (value === "÷") expression += "/";
    else expression += value;
    displayInput.value = expression;
    display.classList.add("active");
    calculate();
  });
});

//calculation

function calculate() {
  try {
    displayResult.value = evaluate(expression);
  } catch {
    displayResult.value = "";
  }
}

//evaluation
function evaluate(exp) {
  if (exp === "") {
    return "";
  }
  return eval(exp);
}
