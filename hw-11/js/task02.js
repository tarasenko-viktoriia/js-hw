"use strict"

function generateRandomTable(rowsNum, colsNum, minValue = 1, maxValue = 500) {
    const arr = []
    for (let rowIndex = 0; rowIndex < rowsNum; rowIndex++) {
        arr.push([])
        for (let colIndex = 0; colIndex < colsNum; colIndex++) {
            const randomNum = minValue +Math.floor(Math.random() * (maxValue-minValue +1))
            arr[rowIndex].push(randomNum)
        }
    }
    return arr
}
const profit = generateRandomTable(3,7)

// загальний прибуток кожного магазину за тиждень
function getShopWeekProfit(profit) {
    let totalProfits = []
    for (let shop of profit) {
        let sum = 0
        for (let dayProfit of shop) {
            sum += dayProfit
        }
        totalProfits.push(sum)
    }
    return totalProfits
}
document.write(`Загальний прибуток: ${getShopWeekProfit(profit)} <br>`)

// загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.)
function getSumDayProfit(profit) {
    for (let dayProfitIndex = 0; dayProfitIndex < 7; dayProfitIndex++) {
        let sum = 0
        for (let shop of profit) {
            sum += shop[dayProfitIndex]
        }
        document.write(`Прибуток за ${dayProfitIndex + 1} день: ${sum} грн.<br>`)
    }
}
getSumDayProfit(profit)

// загальний прибуток за робочі дні
function getProfitWorkingDays(profit) {
    let sum = 0
    for (let shopIndex = 0; shopIndex < profit.length; shopIndex++) {
        for (let dayProfitIndex = 0; dayProfitIndex < 5; dayProfitIndex++) {
            sum += profit[shopIndex][dayProfitIndex]
        }
    }
    return sum
}

document.write(`Загальний прибуток за робочі дні: ${getProfitWorkingDays(profit)} грн. <br>`)

// загальний прибуток за вихідні дні
function getProfitWeekend(profit) {
    let sum = 0
    for (let shopIndex = 0; shopIndex < profit.length; shopIndex++) {
        for (let dayProfitIndex = 5; dayProfitIndex < 7; dayProfitIndex++) {
            sum += profit[shopIndex][dayProfitIndex]
        }
    }
    return sum
}
document.write(`Загальний прибуток за вихідні дні: ${getProfitWeekend(profit)} грн. <br>`)

// максимальний прибуток за середу
function getMaxProfitWednesday(profit) {
    let max = -Infinity
    for (let shopIndex = 0; shopIndex < profit.length; shopIndex++) {
        if (profit[shopIndex][2] > max) max = profit[shopIndex][2]
    }
    return max
}

document.write(`Максимальний прибуток за середу: ${getMaxProfitWednesday(profit)} грн.<br>`)

// сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
const newProfit = profit.flat(Infinity).filter(el => el>200)
document.write(`Загальний список (одновимірний масив) зі значенням, які що більші за 200: ${newProfit} <br>`)

// відсортувати кожен тиждень за зростанням
function sortProfits(profit) {
    return profit.map(shop => [...shop].sort((a, b) => a - b))
}

const sortedProfits = sortProfits(profit)
document.write(`Відсортовані тижні за зростанням: ${JSON.stringify(sortedProfits)} <br>`)



// відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), 
// тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

function sortWeeksByMaxProfit(profit) {
    return [...profit].sort((week1, week2) => Math.max(...week2) - Math.max(...week1))
}

const sortedByMax = sortWeeksByMaxProfit(profit)
document.write(`Відсортовані тижні за спаданням максимального прибутку: ${JSON.stringify(sortedByMax)} <br>`)


// упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму
// кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше)
function sortWeeksByMaxSum(profit) {
    return [...profit].sort((week1, week2) => {
        const sum1 = week1.reduce((sum, el) => sum + el, 0)
        const sum2 = week2.reduce((sum, el) => sum + el, 0)
        return sum2 - sum1
    })
}

const sortedBySum = sortWeeksByMaxSum(profit)
document.write(`Відсортовані тижні за спаданням суми елементів: ${JSON.stringify(sortedBySum)} <br>`)
