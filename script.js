let meter, feet, liter, gallon, kilogram, pound;

const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

btnEl.addEventListener("click", function () {
  let number = inputEl.value;

  meter = (number / 3.281).toFixed(3);
  feet = (number * 3.281).toFixed(3);

  gallon = (number * 0.264).toFixed(3);
  liter = (number / 0.264).toFixed(3);

  kilogram = (number / 2.204).toFixed(3);
  pound = (number * 2.204).toFixed(3);
  display(number);
});

function display(num) {
  lengthEl.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`;
  volumeEl.textContent = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters`;
  massEl.textContent = `${num} kilos = ${pound} pounds | ${num} pounds = ${kilogram} kilos`;
}
