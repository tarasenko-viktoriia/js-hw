"use strict"
// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.

// Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком .

function generateRandomArr(arrLength, minValue = 1, maxValue = 100) {
    const arr = []
    for (let i = 0; i < arrLength; i++) {
      const randomNum = minValue +Math.floor(Math.random() * (maxValue-minValue +1))
        arr.push(randomNum)
    }
    return arr
}
const arr = generateRandomArr(30)
function getCocktailSort(arr) {
    let leftIndex=0, 
    rightIndex = arr.length-1, 
    numExchanges = 0, 
    numComparisons = 0

    while (leftIndex<rightIndex) {
        let change = false
        for (let i = leftIndex+1; i <= rightIndex; i++) {
            if (arr[i-1] > arr[i]) {
                let tmp = arr [i-1]
                arr[i-1] = arr[i]
                arr[i]= tmp
                change = true
                numExchanges +=1
                document.write(`${JSON.stringify(arr)} <br>`)
            }
            numComparisons+=1
        }
        rightIndex--
        if(change === false) break

        change = false
        for (let i = rightIndex; i > leftIndex; i--) {
            if (arr[i-1] > arr[i]) {
                let tmp = arr [i-1]
                arr[i-1] = arr[i]
                arr[i]= tmp
                change = true
                numExchanges +=1
                document.write(`${JSON.stringify(arr)} <br>`)
            }
            numComparisons+=1
        }
        leftIndex++
        if(change === false) break
    }

    return [arr, numExchanges, numComparisons]
}

const [arrSort,numExchanges, numComparisons] = getCocktailSort(arr);
document.write(`<h3>Число обмінів становить ${numExchanges}, а число порівнянь - ${numComparisons}</h3>`)