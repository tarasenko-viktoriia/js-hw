"use strict"
// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

function generateRandomArr(arrLength, minValue = 1, maxValue = 100) { 
    const arr = []
    for (let i = 0; i < arrLength; i++) {
        const randomNum = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
        arr.push(randomNum)
    }
    return arr
}

const arr = generateRandomArr(30)

let numExchanges = 0, numComparisons = 0

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const currentElement = arr[i]
        let k = i - 1
        
        while (k >= 0) {
            numComparisons += 1  
            if (arr[k] > currentElement) {
                arr[k + 1] = arr[k]  
                numExchanges += 1 
            } else {
                break
            }
            k -= 1
        }
        arr[k + 1] = currentElement 
    }
}

insertSort(arr)
document.write(`<h3>Число обмінів становить ${numExchanges}, а число порівнянь - ${numComparisons}</h3>`)
