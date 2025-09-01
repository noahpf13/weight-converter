
// Get Elements from HTML

const swapButton = document.getElementById("swap-button");
const inputLabel = document.getElementById("input-label");
const outputLabel = document.getElementById("output-label");

// When button is clicked, change the text
swapButton.addEventListener("click", function() {
    if (inputLabel.textContent === "lb") {
        inputLabel.textContent = "kg";
        outputLabel.textContent = "lb"
    } else {
        inputLabel.textContent = "lb";
        outputLabel.textContent = "kg";
    }
});