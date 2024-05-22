const calculator = document.querySelector("#calculator");
const display = calculator.querySelector(".display");
const historyList = calculator.querySelector("#history-list");
const buttons = calculator.querySelectorAll("button");
let history = []; // Array to store calculation history

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    let text = display.textContent.trim();
    if (value === "clear") {
      display.textContent = "0";
    } else if (value === "backspace") {
      display.textContent = text.substring(0, text.length - 1);
    } else if (value === "=") {
      const result = eval(text);
      display.textContent = result;
      // Add the calculation to history
      history.unshift(`${text} = ${result}`); // Insert at the beginning of the array
      // Update the history list
      updateHistory();
    } else if (value === "+/-") {
      display.textContent = text.startsWith("-") ? text.substring(1) : `-${text}`;
    } else {
      display.textContent = text === "0" ? value : text + value;
    }
  });
});

// Function to update the history list
function updateHistory() {
  // Clear the previous list
  historyList.innerHTML = "";
  // Add each calculation to the list
  history.forEach(calculation => {
    const listItem = document.createElement("li");
    listItem.textContent = calculation;
    historyList.appendChild(listItem);
  });
}
