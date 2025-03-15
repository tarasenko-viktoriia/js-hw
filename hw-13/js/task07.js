"use strict"
// Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
if (confirm('Почати тестування?')) {

    function getMathematicalExample(minValue = 1, maxValue = 100) {
        let randomNum1 = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
        let randomNum2 = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))

        const userAnswer = parseInt(prompt(`Введіть результат додавання ${randomNum1} + ${randomNum2}`))

        if (userAnswer === randomNum1 + randomNum2) {
            document.write("<h2>Ви правильно порахували!</h2>")
        } else {
            document.write("<h2>Ви помилились!</h2>")
        }

        setTimeout(getMathematicalExample, 10000)
    }

    getMathematicalExample()
}