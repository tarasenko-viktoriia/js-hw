"use strict"

if (confirm('Почати тестування?')) {
    const userNum = parseInt(prompt("Введіть кількість елементів масиву"))
    function getArr(userNum) {
        return new Array(userNum).fill(0)
    }
    document.write(getArr(userNum))
}