"use strict"
// Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

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

const table1 = createTable(3, 4)
console.log(table1)
document.getElementById("table-container").append(table1)