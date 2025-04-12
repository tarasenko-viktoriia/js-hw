"use strict"
// Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

// function getClick() {
//    const clickDiv = this

//    if(clickDiv.tagName === "DIV") clickDiv.nextElementSibling.style.color = "red"
//    let div = clickDiv
//    while(div.nextElementSibling){
//       div = div.nextElementSibling
//       div.style.color = "red"
//    }
// }

// const divList = document.querySelectorAll("div")
// for (const div of divList) {
//    div.onclick = getClick
// }
const divContainer = document.getElementById("container")
divContainer.addEventListener('click', function(event){
   const clickDiv = event.target

   if(clickDiv.tagName === "DIV") clickDiv.nextElementSibling.style.color = "red"
   let div = clickDiv
   while(div.nextElementSibling){
      div = div.nextElementSibling
      div.style.color = "red"
   }
})

