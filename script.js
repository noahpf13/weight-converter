
// Get Elements from HTML for label swap

const swapButton = document.getElementById("swap-button");
const inputLabel = document.getElementById("input-label");
const outputLabel = document.getElementById("output-label");

// When button is clicked, change the weight unit of measure

swapButton.addEventListener("click", function() {
    if (inputLabel.textContent === "lb") {
        inputLabel.textContent = "kg";
        outputLabel.textContent = "lb"
    } else {
        inputLabel.textContent = "lb";
        outputLabel.textContent = "kg";
    }
});

// Get user input value for conversion

const inputBox = document.getElementById("input-box");
const userNumber = inputBox.value

// Output converted number


// conversion

