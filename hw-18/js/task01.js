"use strict"
// Розробити калькулятор

function calculate(operation) {
  const firstNum = parseFloat(document.getElementById('firstNumber').value)
  const secondNum= parseFloat(document.getElementById('secondNumber').value)

  let result

  switch (operation) {
    case "addition": result = firstNum + secondNum
      break;
    case "subtraction": result = firstNum - secondNum
      break
    case "multiplication": result = firstNum * secondNum
      break
    case "division": result = firstNum / secondNum
      break
  }  
  document.getElementById('result').value = result
}
window.onload = function () {
  document.getElementById('addition').onclick = () => calculate('addition')
  document.getElementById('subtraction').onclick = () => calculate('subtraction')
  document.getElementById('multiplication').onclick = () => calculate('multiplication')
  document.getElementById('division').onclick = () => calculate('division')
}
// function addition() {
//   const firstNum = parseFloat(document.getElementById('firstNumber').value)
//   const secondNum= parseFloat(document.getElementById('secondNumber').value)
//   const addition = firstNum + secondNum
//   document.getElementById('result').value = addition
// }
// function subtraction() {
//   const firstNum = parseFloat(document.getElementById('firstNumber').value)
//   const secondNum= parseFloat(document.getElementById('secondNumber').value)
//   const subtraction = firstNum - secondNum
//   document.getElementById('result').value = subtraction
// }
// function multiplication() {
//   const firstNum = parseFloat(document.getElementById('firstNumber').value)
//   const secondNum= parseFloat(document.getElementById('secondNumber').value)
//   const multiplication = firstNum * secondNum
//   document.getElementById('result').value = multiplication
// }
// function division() {
//   const firstNum = parseFloat(document.getElementById('firstNumber').value)
//   const secondNum= parseFloat(document.getElementById('secondNumber').value)
//   const division = firstNum / secondNum
//   document.getElementById('result').value = division
// }