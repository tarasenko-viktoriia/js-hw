"use strict"

function createTable(rowNum, colsNum, minRandNum = 0, maxRandNum = 100) {
   const tableEl = document.createElement('table')
   tableEl.style.cssText = "border-collapse: collapse; width: 100%;"
   for (let rowIndex = 0; rowIndex < rowNum; rowIndex++) {
      const trEl = document.createElement("tr")

      for (let colIndex = 0; colIndex < colsNum; colIndex++) {
         const tdEl = document.createElement("td")

         tdEl.innerText = minRandNum + Math.floor(Math.random() * (maxRandNum - minRandNum + 1))
         tdEl.style.cssText = "border: 1px solid black; padding: 8px; text-align: center;";
         trEl.append(tdEl)
      }
      tableEl.append(trEl)
   }
   return tableEl
}

const table1 = createTable(3, 3)
const table2 = createTable(3, 3)
const table3 = createTable(3, 3)
document.querySelector(".table-01").append(table1)
document.querySelector(".table-02").append(table2)
document.querySelector(".table-03").append(table3)

const tableContainer = document.querySelector("#table-container")
tableContainer.addEventListener('click', function(event){
   const clickedCell = event.target.closest('td')
   
   if (clickedCell) {
      const table = clickedCell.closest('table')  
      
      let clicks = table.getAttribute("data-clicks")

      clicks++
      
      table.setAttribute("data-clicks", clicks)
      
      const tableWrapper = table.parentElement 
      const clickCounter = tableWrapper.querySelector(".click-num") 
      
      clickCounter.innerText = clicks

      table.classList.toggle('selected-table')
   }
})