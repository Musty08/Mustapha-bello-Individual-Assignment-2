javascript
function convertToFar() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitOutput = document.getElementById("fahrenheit");
    var fahrenheitValue = (celsiusInput * 9/5) + 32;
    fahrenheitOutput.value = fahrenheitValue.toFixed(2);
}
function convertToCel() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var celsiusOutput = document.getElementById("celsius");
    var celsiusValue = (fahrenheitInput - 32) * 5/9;
    celsiusOutput.value = celsiusValue.toFixed(2);
}