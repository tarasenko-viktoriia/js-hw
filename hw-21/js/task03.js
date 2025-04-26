"use strict"
// Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

function createList(num) {
   const listContainer = document.querySelector(".list-container")
   for (let i = 1; i <= num; i++) {
      const olElement = document.createElement("ol")
      let numOlElements = 1 + Math.floor(Math.random() * 10)
      for (let j = 1; j <= numOlElements; j++) {
         const liElement = document.createElement("li")
         let randNum = 1 + Math.floor(Math.random() * 100)
         liElement.innerText = randNum
         olElement.append(liElement)
      }
      listContainer.append(olElement)
   }
}


function colorList() {
   const olList = document.querySelectorAll('OL')
   olList.forEach(list => {
      if(list.children.length % 2 === 0) list.style.color = "green"
      else list.style.color = "red"
   })
}

createList(5)

document.querySelector('button').addEventListener("click", colorList)


