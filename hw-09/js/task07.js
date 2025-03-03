"use strict"

if (confirm('Почати тестування?')) {
    function getRandomArr(el, start, end) {
        const arr = []
        for (let i = 0; i < el; i++) {
            const randomElement = start + Math.floor(Math.random() * (end - start + 1))
            arr.push(randomElement)
        }
        return arr
    }
    
    const prices = getRandomArr(10, 10, 2000)
    
    prices.forEach((price, index, arr) => {
        if (price > 1000) arr[index] *= 0.7
    })
    document.write (prices)
}