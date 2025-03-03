"use strict"

if (confirm('Почати тестування?')) {
    // const userNum = parseInt(prompt("Введіть кількість елементів в масиві"))
    // const prices = []
    
    // for (let i = 0; i < userNum; i++) {
    //    let randomPrice = 1 + Math.floor(Math.random() * 10000)
    //    prices[i]=randomPrice
    // }
    const prices = [255, 3690, 9999, 2500, 68]

    const elementEvery = prices.every(el => el < 1000)

    document.write(`Чи всі ціни більше 1000 : ${element}`)

}