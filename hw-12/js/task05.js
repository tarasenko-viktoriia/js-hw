"use strict"
// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//          Підрахувати кількість змін цін
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

    const numChanges = prices.reduce((prevSum, el, index, arr) => 
        index > 0 && el !== arr[index - 1] ? prevSum + 1 : prevSum
    , 0)

    document.write(`Кількість зімн: ${numChanges}`)
}