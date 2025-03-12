"use strict"

// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою


function generateRandomArr(arrLength, minValue = 1, maxValue = 100) {
  const arr = []
  for (let i = 0; i < arrLength; i++) {
    const randomNum = minValue +Math.floor(Math.random() * (maxValue-minValue +1))
    arr.push(randomNum)
  }
  return arr
}
const arr = generateRandomArr(30)

let change, endIndex = arr.length, numExchanges = 0, numComparisons = 0

do {
  change = false
  for (let i = 1; i < endIndex; i++) {
    if (arr[i-1] > arr[i]) {
      let tmp = arr [i-1]
      arr[i-1] = arr[i]
      arr[i]= tmp
      change = true
      numExchanges +=1
    }
    numComparisons+=1
  }
  endIndex--
}while(change)
document.write(`<h3>Число обмінів становить ${numExchanges}, а число порівнянь - ${numComparisons}</h3>`)