"use strict"
// Користувач може змінювати колір фону, що вибирає користувач з використанням input type="color"
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.


const inputColor = document.getElementById("inputColor")
const counter = document.getElementById("counter")

function initBgColor() {
   const savedColor = localStorage.getItem("bgColor")
   if (savedColor) {
      document.body.style.backgroundColor = savedColor
      inputColor.value = savedColor
   }
}

function changeCounter() {
   let count = parseInt(sessionStorage.getItem("changeCount"))
   if (isNaN(count)) {
      count = 0
      sessionStorage.setItem("changeCount", String(count))
   }
   counter.innerText = count
   return count
}

function colorChange() {
   const color = inputColor.value
   document.body.style.backgroundColor = color
   localStorage.setItem("bgColor", color)

   countChange++
   sessionStorage.setItem("changeCount", countChange)
   counter.innerText = countChange
}

initBgColor()
let countChange = changeCounter()

inputColor.addEventListener('input', colorChange)
