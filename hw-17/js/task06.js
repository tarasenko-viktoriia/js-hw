"use strict"
// Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.

function createTable() {
   const rowNum = parseInt(document.getElementById("num").value)

   const tableEl = document.createElement('table')
   for (let rowIndex = 0; rowIndex < 1; rowIndex++) {
      const trEl = document.createElement("tr")
      for (let colIndex = 0; colIndex < rowNum; colIndex++) {
         const tdEl = document.createElement("td")
         const inputEl = document.createElement("input")
         inputEl.type = "number"
         tdEl.append(inputEl)
         trEl.append(tdEl)
      }
      tableEl.append(trEl)
   }
   return tableEl
}
const btnTable = document.getElementById("getTable");

btnTable.onclick = function () {
   const tableContainer = document.getElementById("table-container")
   tableContainer.innerText = ""
   const table = createTable()
   tableContainer.append(table)

   const btnSum = document.createElement("button")
   btnSum.id = "btnSum"
   btnSum.innerText = "Get Sum"
   tableContainer.append(btnSum)

   btnSum.onclick = getSum
}
function getSum() {
   const container = document.getElementById('table-container')
   const inputs = container.querySelectorAll('input')
   let sum = 0
   for (let i = 0; i < inputs.length; i++) {
      sum += parseInt(inputs[i].value)
   }
   let result = sum / inputs.length

   document.getElementById('result').innerText = result.toFixed(2)
}
