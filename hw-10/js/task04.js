"use strict"

if (confirm('Почати тестування?')) {
    // const userNum = parseInt(prompt("Введіть кількість елементів в масиві"))
    // const prices = []
    
    // for (let i = 0; i < userNum; i++) {
    //    let randomPrice = 1 + Math.floor(Math.random() * 10000)
    //    prices[i]=randomPrice
    // }
    const prices = [255, 3690, 9999, 2500, 68]

    const maxPrice = Math.max(...prices)
    const pricesInPercent = prices.map(el => (el*100/maxPrice).toFixed(2))

    document.write(`Масив, що містить значення цін у відсотках стосовно максимального : ${pricesInPercent}`)

}