const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

/**
 * Event listener for the convert button click.
 * Checks if the user input is a valid decimal number greater than or equal to 0.
 * If it is, logs the user input to the console.
 */
const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }
  console.log(numberInput.value);
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
