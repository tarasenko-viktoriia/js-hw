"use strict"
// Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
const container = document.getElementById("container")

container.addEventListener('input', function(event) {
   const input = event.target

   let currentValue = parseInt(input.value)
   if (isNaN(currentValue)) return

   let value = currentValue

   let prev = input.parentElement.previousElementSibling
   while (prev) {
      const prevInput = prev.querySelector('input')
      if (prevInput) {
         value -= 1
         prevInput.value = value
      }
      prev = prev.previousElementSibling
   }

   value = currentValue

   let next = input.parentElement.nextElementSibling
   while (next) {
      const nextInput = next.querySelector('input')
      if (nextInput) {
         value += 1
         nextInput.value = value
      }
      next = next.nextElementSibling
   }
})
