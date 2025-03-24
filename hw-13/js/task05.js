"use strict"
// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців. 

function countMonth(min, max) {
   let result = min-1
   
   function increment () {
      result++
      if (result > max) {
         result = min
      }
      return result
   }
   return increment 
}

let nextMonth = countMonth(1, 12)

console.log(nextMonth()) 
console.log(nextMonth()) 
console.log(nextMonth())
console.log(nextMonth())
console.log(nextMonth())
console.log(nextMonth())
console.log(nextMonth())
console.log(nextMonth())
console.log(nextMonth())
console.log(nextMonth())
console.log(nextMonth())
console.log(nextMonth())
console.log(nextMonth())
