"use strict"

if (confirm('Почати тестування?')) {
    function getRandomArr(el, start, end) {
        const arr = []
        for (let i = 0; i < el; i++) {
            const randomElement = start + Math.floor(Math.random() * (end - start + 1) )
            arr.push(randomElement)
        }
        return arr
    }
    const randomArr = getRandomArr(10, -50, 200)

    function getSumPositiveEl(arr) {
        let sum = 1
        for (let item of arr) {
            if (item > 0) sum *=item
        }
        return sum
    }

    document.write(`Добуток додатних елементів: ${getSumPositiveEl(randomArr)}`)
}