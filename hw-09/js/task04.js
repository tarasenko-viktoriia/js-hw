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

    function getElMore100(arr) {
        for (let item of arr) {
            if (item >100) 
            document.write(`${item} <br>`)
        }
    }
    
    const randomArr = getRandomArr(10, 1, 200)
    getElMore100(randomArr)
}