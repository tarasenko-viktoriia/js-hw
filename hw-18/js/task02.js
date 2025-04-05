"use strict"
// Зробити конвертер валют (курси валют – константи у скрипті)
function convert() {
   const dollarRate = 42
   const euroRate = 44
   const sumGrn = parseFloat(document.getElementById('grn').value)
   const dollarsAmount = sumGrn / dollarRate
   const euroAmount = sumGrn / euroRate
   document.getElementById('sumInDollar').value = dollarsAmount.toFixed(2)
   document.getElementById('sumInEuro').value = euroAmount.toFixed(2)
}
window.onload = function () {
   document.querySelector('button').onclick = convert
}