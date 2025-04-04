"use strict"
// Розробити калькулятор
function convert() {
    //знайдемо елемент  і візьмемо значення курсу
    const dollarRate = parseFloat(document.getElementById('course').value)
    //знайдемо елемент  і візьмемо значення кількості гривень
    const grnVal = parseFloat(document.getElementById('grn').value)
    //обчислимо кількість доларів
    const dollarsAmount = grnVal / dollarRate
    //виведемо кількість доларів
    document.getElementById('res').innerText = dollarsAmount.toFixed(2)
  }
  // window.onload = function () {
  //   document.querySelector('button').onclick = convert
  // }
