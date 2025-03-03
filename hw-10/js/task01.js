"use strict"
// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

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

    const pricesGreater1000 = prices.filter(el => el>1000)

    document.write(`Масив, у якому є тільки ті, що більші за 1000 грн. : ${pricesGreater1000}`)
}