"use strict"
// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//          Знайти індекс першої ціни, що більше за 1000
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

    const firstIndexPriceGreater1000 = prices.findIndex(el=> el >1000)

    document.write(`Індекс першої ціни, що більше за 1000: ${firstIndexPriceGreater1000}`)

}