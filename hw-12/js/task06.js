"use strict"
// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, 
// чи є у масиві ім’я довжиною 5 символів і під яким індексом.

if (confirm('Почати тестування?')) {
    function generateRandomArr(arrLength) { 
        const arr = []
        for (let i = 0; i < arrLength; i++) {
            const userName = prompt("Введіть ваше ім'я на англійській мові")
            arr.push(userName.toLowerCase()) 
        }
        return arr
    }

    const arr = generateRandomArr(3)

    function insertSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            const currentElement = arr[i]
            let k = i - 1
            while (k >= 0 && arr[k] > currentElement) {
                arr[k + 1] = arr[k]
                k -= 1
            }
            arr[k + 1] = currentElement 
        }
        return arr
    }

    function findNameWithLengthFive(a) {
        let start = 0
        let end = a.length - 1

        while (start <= end) {
            const middle = Math.floor((start + end) / 2)
            const middleName = a[middle]

            if (middleName.length === 5) {
                return middle 
            }

            if (middleName.length < 5) {
                start = middle + 1
            } else {
                end = middle - 1
            }
        }

        return -1 
    }

    const sortedArray = insertSort(arr)
    console.log("Відсортований масив:", sortedArray)

    const index = findNameWithLengthFive(sortedArray)

    if (index !== -1) {
        document.write(`Ім'я довжиною 5 символів знайдено під індексом ${index}`)
    } else {
        document.write(`Ім'я довжиною 5 символів не знайдено`)
    }
}