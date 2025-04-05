"use strict"
// Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 
// і відображаються у окремих div (їх треба створити і додати на сторінку)
const wishes = ["Гроші", "Великі гроші", "Дуже великі гроші", "Море грошей", "Купа грошей"]
function createDiv (wishes, numDiv) {
   const container = document.getElementById("div-container")
   let copyWishes = [...wishes]
   for (let i = 0; i < numDiv; i++) {
      const div = document.createElement("div")
      const randIndex = Math.floor(Math.random() * copyWishes.length)
      div.innerText = copyWishes[randIndex]

      copyWishes.splice(randIndex, 1)

      container.append(div)
      
   }
}
createDiv (wishes, 3)