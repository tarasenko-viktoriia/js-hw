"use strict"
// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, 
// чи є у масиві ім’я «Olga» і під яким індексом.

if (confirm('Почати тестування?')) {

    function getUserName(length) {
        const arr = []
        for (let i = 0; i < length; i++) {
            const name = prompt("Введіть ім'я корисувача")
            arr.push(name)
        }
        return arr
    }

    const arr = getUserName(3)

    function getSortArr(arr) {
        let change, endIndex = arr.length

        do {
        change = false
        for (let i = 1; i < endIndex; i++) {
            if (arr[i-1] > arr[i]) {
            let tmp = arr [i-1]
            arr[i-1] = arr[i]
            arr[i]= tmp
            change = true
            }
        }
        endIndex--
        }while(change)

        return arr
    }
    

    function findIndex_binarySearch(a, searchElement) {
        let start = 0
        let end = a.length-1
        searchElement = searchElement.toLowerCase()
        while (start <= end) {
            const middle = Math.floor((start + end) / 2)
            if (a[middle] === searchElement) return middle
            if (a[middle] < searchElement) start = middle + 1
            if (a[middle] > searchElement) end = middle - 1
        }
        return -1
    }

    const sortedArray = getSortArr(arr)
    const searchIndex = findIndex_binarySearch(sortedArray, "Olga")

    if (searchIndex !== -1 ) document.write(`"Olga" є в масиві під індексом ${searchIndex}`)
    else document.write(`"Olga" не входить у масив`)
}