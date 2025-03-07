"use strict"
// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

if (confirm('Почати тестування?')) {
    const userNum = parseInt(prompt("Введіть кількість елементів в масиві"))
    
    function getPricesArr(userNum) {
        const prices = []
        for (let i = 0; i < userNum; i++) {
            let randomPrice = 1 + Math.floor(Math.random() * 10000)
            prices.push(randomPrice)
        }
        return prices
    }
    const prices = getPricesArr(userNum) 

    const indexesGreater1000 = prices.map((el, index) => (el > 1000 ? index : -1)).filter(index => index !== -1)

    document.write(`Масив, у якому є номери тільки тих, що більші за 1000 грн. : ${indexesGreater1000}`)
}