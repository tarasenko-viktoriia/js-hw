"use strict"
// Користувач задає рік народження. Визначити кількість років користувача.

function birthYear (){
   const birthYear = parseInt(document.getElementById("birthYear").value)
   const currentYear = new Date().getFullYear()
   const numYears = currentYear - birthYear

   document.getElementById("result").innerText = numYears
}

window.onload = function () {
   document.querySelector('button').onclick = birthYear
}