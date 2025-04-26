"use strict"
const cardList = document.querySelector(".card__list")
cardList.addEventListener('click', function(event){
   const clickedElement = event.target.closest(".card__item")
   
   if (clickedElement) {
      clickedElement.classList.toggle('selected')
   }
})