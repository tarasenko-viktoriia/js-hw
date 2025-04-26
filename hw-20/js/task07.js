"use strict"
// Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0) і з випадковою швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top). Як тільки сніжинка досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).
function snowfall() {
   const snowflake =  document.createElement("span")
   snowflake.innerText = "❄"

   let topPosition = 0
   let leftPosition = Math.random() * window.innerWidth
   const fallSpeed = 1 + Math.random() * 3

   snowflake.style.left = leftPosition + "px"
   snowflake.style.top = topPosition + "px"
   document.body.appendChild(snowflake)

   setInterval(() => {
      topPosition += fallSpeed
      snowflake.style.top = topPosition + "px"

      if (topPosition > window.innerHeight) {
         topPosition = 0
         snowflake.style.left = Math.random() * window.innerWidth + "px"
      }
   }, 50)
}
for (let i = 0; i < 100; i++) {
   snowfall()
}
