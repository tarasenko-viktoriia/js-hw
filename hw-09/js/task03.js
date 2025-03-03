"use strict"

if (confirm('Почати тестування?')) {
    const userNum = parseInt(prompt("Введіть кількість елементів масиву"))
    function getArr(userNum) {
        const arr = new Array (userNum)
        arr.fill(1, 0, 5)
        arr.fill(7, 5)
        return arr
    }
    document.write(getArr(userNum))
}