"use strict"
// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//          Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

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

    const maxPrice = Math.max(...prices)
    const pricesInPercent = prices.map(el => (el*100/maxPrice).toFixed(2))

    document.write(`Масив, що містить значення цін у відсотках стосовно максимального : ${pricesInPercent}`)

}