"use strict"

if (confirm('Почати тестування?')) {
    const userNum = parseInt(prompt("Введіть кількість елементів масиву"))
    function  getArr(userNum) {
        const arr = new Array (userNum)
        const halfArr = Math.floor(arr.length / 2)
        arr.fill(1, 0, halfArr);
        arr.fill(7, halfArr);
        return arr
    }
    
    document.write(getArr(userNum))
}