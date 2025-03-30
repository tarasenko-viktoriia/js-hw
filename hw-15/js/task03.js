"use strict"
// Розробити клас MultChecker для перевірки таблиці множення
// Поля
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран

if (confirm('Почати тестування?')) {
    class MultChecker {
        constructor(num) {
            this.num = num
            this.correctAnswers = 0
            this.incorrectAnswers = 0
        }
        getExample () {
            this.secondNum = 1 + Math.floor(Math.random() * 10)
            return this.num * this.secondNum
        }
        checkingСorrectness () {
            const correctResult = this.getExample()
            const userAnswer = parseInt(prompt(`Введіть результат прикладу ${this.num} * ${this.secondNum}`))

            if (userAnswer === correctResult) this.correctAnswers++
            else this.incorrectAnswers++
        }
        getResult () {
            document.write(`Кількість правильних відповідей: ${this.correctAnswers}. Кількість неправильних відповідей ${this.incorrectAnswers}`)
        }
    }
    const mult = new MultChecker(7)

    mult.checkingСorrectness()
    mult.checkingСorrectness()
    mult.checkingСorrectness()


    mult.getResult()
}