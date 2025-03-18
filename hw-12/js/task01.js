"use strict"
// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою

// Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком .

function generateRandomArr(arrLength, minValue = 1, maxValue = 100) {
  const arr = []
  for (let i = 0; i < arrLength; i++) {
    const randomNum = minValue +Math.floor(Math.random() * (maxValue - minValue +1))
    arr.push(randomNum)
  }
  return arr
}
const arr = generateRandomArr(30)

function getBubbleSort(arr) {
  let change, endIndex = arr.length, 
  numExchanges = 0, 
  numComparisons = 0

  do {
    change = false
    for (let i = 1; i < endIndex; i++) {
      if (arr[i-1] > arr[i]) {
        let tmp = arr [i-1]
        arr[i-1] = arr[i]
        arr[i]= tmp
        change = true
        document.write(`${JSON.stringify(arr)} <br>`)
        numExchanges +=1
      }
      numComparisons+=1
    }
    endIndex--
  }while(change)
  return [arr, numExchanges, numComparisons]
}
const [arrSort, numExchanges, numComparisons] = getBubbleSort(arr);
document.write(`<h3>Число обмінів становить ${numExchanges}, а число порівнянь - ${numComparisons}</h3>`)