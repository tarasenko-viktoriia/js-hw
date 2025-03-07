"use strict"
// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//          Знайти першу ціну, що більше за 1000
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

    const firstPriceGreater1000 = prices.find(el=> el >1000)

    document.write(`Перша ціна, що більше за 1000: ${firstPriceGreater1000}`)
}