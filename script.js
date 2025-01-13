let inputBox = document.getElementById("inputBox"); // Input field
let buttons = document.querySelectorAll("button"); // All buttons

let currentInput = ""; // To store the current input string
let buttonArray = Array.from(buttons); // Convert NodeList to Array

// Add event listeners to all buttons
buttonArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML; // Get the button text

    if (value === "=") {
      // Evaluate the input and handle errors
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error"; // Handle invalid expressions
      }
    } else if (value === "AC") {
      // Clear the input
      currentInput = "";
    } else if (value === "DEL") {
      // Remove the last character
      currentInput = currentInput.slice(0, -1);
    } else {
      // Append the button value to the input string
      currentInput += value;
    }

    // Update the input box value
    inputBox.value = currentInput;
  });
});
