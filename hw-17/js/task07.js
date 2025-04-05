"use strict"
// Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.
function getTotalPrice() {
   const selectList = document.querySelectorAll("select")
   let sumSelectList = 0
   for (const select of selectList) {
      sumSelectList += parseFloat(select.value)
   }

   const inputsList= document.querySelectorAll("input")
   let sumInputsList = 0
   for (const inputEl of inputsList) {
      if(inputEl.checked) sumInputsList += parseFloat (inputEl.value)
   }

   document.getElementById('result').innerText = sumSelectList  + sumInputsList
}
window.onload = function () {
   document.querySelector('button').onclick = getTotalPrice
}