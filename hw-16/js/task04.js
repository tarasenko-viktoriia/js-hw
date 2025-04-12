"use strict"
// Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.          

class TBankomat {
    constructor (count5 = 0, count10 = 0, count20 = 0, count50 = 0, count100 = 0, count200 = 0) {
        this._bills = {
            5: count5,
            10: count10,
            20: count20,
            50: count50,
            100: count100,
            200: count200,
        }
    }

    getMaxSum () {
        let sum = 0
        for (const [key, value] of Object.entries(this._bills)) {
            sum += key * value
        }
        return `Максимальна сума, що може видати банкомат: ${sum} <br>`
    }
    getMinSum() {
        let minSum = Infinity;
        for (const [key, value] of Object.entries(this._bills)) {
            const billValue = Number(key)
            if (billValue < minSum && value > 0) {
                minSum = billValue
            }
        }
        return `Мінімальна сума, що може видати банкомат: ${minSum} <br>`
    }

    withdraw(amount) {
        let originalAmount = amount
        const toWithdraw = {}

        const billsCopy = { ...this._bills }

        const denominations = [200, 100, 50, 20, 10, 5]

        for (let denom of denominations) {
            if (amount === 0) break

            let neededBills = Math.floor(amount / denom)
            let availableBills = billsCopy[denom]

            let billsToUse = Math.min(neededBills, availableBills)

            if (billsToUse > 0) {
                toWithdraw[denom] = billsToUse
                amount -= billsToUse * denom
            }
        }

        if (amount > 0) {
            return document.write(`Не можу видати суму ${originalAmount} грн. Недостатньо потрібних купюр. <br>`)
        }

        for (let denom in toWithdraw) {
            this._bills[denom] -= toWithdraw[denom]
        }

        return document.write(`Видано ${originalAmount} грн. <br>`)
    }

    toString() {
        let result = `Стан банкомата: <br>`;
        for (const [key, value] of Object.entries(this._bills)) {
            result += `Купюр по ${key} грн: ${value} шт. <br>`
        }
        return result
    }

}
const bankomat = new TBankomat(10, 10, 10, 10, 10, 30)
document.write(bankomat.toString())
document.write(bankomat.getMaxSum())
document.write(bankomat.getMinSum())
bankomat.withdraw(205)
document.write(bankomat.toString())
bankomat.withdraw(1000)
document.write(bankomat.toString())
bankomat.withdraw(1002)
document.write(bankomat.toString())