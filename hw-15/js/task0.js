"use strict"
// Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, 
// а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

const obj1 = {
   arr: [2, 4, 6, 8],

   getSum(){
      return this.arr.reduce((prevSum, arr) => prevSum + arr, 0)
   }
}

const obj2 = {
   arr: [10, 8, 7, 6],

   getProduct(min, max) {
      let filteredNumbers = this.arr.filter(num => num >= min && num <= max)
      if (filteredNumbers.length === 0) {
         return 0
      }
      return filteredNumbers.reduce((product, num) => product * num, 1)
   }
}
console.log(obj1.getSum())
console.log(obj2.getProduct(6, 7))
console.log(obj1.getSum.call(obj2))
console.log(obj2.getProduct.call(obj1,6, 8))
console.log(obj1.getSum.apply(obj2))
console.log(obj2.getProduct.apply(obj1,[6, 8]))