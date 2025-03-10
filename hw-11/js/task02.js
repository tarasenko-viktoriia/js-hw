"use strict"

const profit = [
    [100, 200, 150, 130, 170, 180, 220], // Магазин 1
    [90, 210, 130, 140, 160, 190, 200],  // Магазин 2
    [120, 250, 140, 110, 180, 230, 250]  // Магазин 3
];

// загальний прибуток кожного масиву за тиждень
for (let shop of profit ) {
    let sum01 = 0
    for (let dayProfit of shop) {
        sum01 += dayProfit
    }
    document.write(`Загальний прибуток: ${sum01} грн. <br>`)
}
// загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.)
for (let dayProfitIndex = 0; dayProfitIndex < 7; dayProfitIndex++) {
    let sum = 0
    for (let shop of profit) {
        sum += shop[dayProfitIndex]
    }
    document.write(`Прибуток по ${dayProfitIndex+1} дню: ${sum} грн.<br>`)
}
// загальний прибуток за робочі дні
let sum02 = 0
for (let shopIndex = 0; shopIndex < profit.length; shopIndex++) {
    for (let dayProfitIndex = 0; dayProfitIndex < 5; dayProfitIndex++) {
        sum02 += profit[shopIndex][dayProfitIndex]
    }
}
document.write(`Загальний прибуток за робочі дні: ${sum02} грн. <br>`)

// загальний прибуток за вихідні дні
let sum03 = 0
for (let shopIndex = 0; shopIndex < profit.length; shopIndex++) {
    for (let dayProfitIndex = 5; dayProfitIndex < 7; dayProfitIndex++) {
        sum03 += profit[shopIndex][dayProfitIndex]
    }
}
document.write(`Загальний прибуток за вихідні дні: ${sum03} грн. <br>`)

// максимальний прибуток за середу
let max = -Infinity
for (let shopIndex = 0; shopIndex < profit.length; shopIndex++) {
    if (profit[shopIndex][2] > max) max = profit[shopIndex][2]
}
document.write(`Максимальний прибуток за середу: ${max} грн.<br>`)

// сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
const newProfit = profit.flat(Infinity).filter(el => el>200)
document.write(`Загальний список (одновимірний масив) зі значенням, які що більші за 200: ${newProfit} <br>`)

// відсортувати кожен тиждень за зростанням
for (let shop of profit) {
    shop.sort((a, b) => a - b)
    document.write(`Відсортований прибуток: ${shop} <br>`)
}

// відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), 
// тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

profit.sort((week1, week2) => {
    const max1 = Math.max(...week1)
    const max2 = Math.max(...week2)
    return max2 - max1
})

document.write(`Відсортовані тижні за спаданням максимального елемента: ${JSON.stringify(profit)} <br>`)


// упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму
// кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше)

profit.sort((week1, week2) => {
    const sum1 = week1.reduce((prevSum, el) => prevSum +el, 0) 
    const sum2 = week2.reduce((prevSum, el) => prevSum +el, 0)
    return sum2 - sum1
});

document.write(`Відсортовані тижні за спаданням суми елементів у рядку: ${JSON.stringify(profit)} <br>`);
