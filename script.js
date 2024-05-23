// script.js
document.getElementById("convertBtn").addEventListener("click", function () {
  const temperatureInput = document.getElementById("temperature").value;
  const selectedUnit = document.querySelector(
    'input[name="unit"]:checked'
  ).value;

  // Validate input
  if (isNaN(temperatureInput) || temperatureInput === "") {
    alert("Please enter a valid number for the temperature.");
    return;
  }

  const temperature = parseFloat(temperatureInput);
  let result;

  switch (selectedUnit) {
    case "Celsius":
      result = `Fahrenheit: ${((temperature * 9) / 5 + 32).toFixed(
        2
      )}°F, Kelvin: ${(temperature + 273.15).toFixed(2)}K`;
      break;
    case "Fahrenheit":
      result = `Celsius: ${(((temperature - 32) * 5) / 9).toFixed(
        2
      )}°C, Kelvin: ${(((temperature - 32) * 5) / 9 + 273.15).toFixed(2)}K`;
      break;
    case "Kelvin":
      result = `Celsius: ${(temperature - 273.15).toFixed(2)}°C, Fahrenheit: ${(
        ((temperature - 273.15) * 9) / 5 +
        32
      ).toFixed(2)}°F`;
      break;
  }

  document.getElementById("result").innerText = result;
});
