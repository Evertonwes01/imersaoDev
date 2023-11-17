var temperaturaCelsius = Number(window.prompt('Digite a temperatura °C'))
var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32
var temperaturaKelvin = temperaturaCelsius + 273.15

alert(`Temperaturas: ${temperaturaCelsius}°C / ${temperaturaFahrenheit}°F / ${temperaturaKelvin}°K`)