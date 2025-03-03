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
    const price = getRandomArr(10, 1, 200)
    const tax = price.map(el => (el * 0.2).toFixed(2))
    document.write (tax)
}