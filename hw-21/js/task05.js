"use strict"
// Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.

class MonthError extends Error {
   constructor(message) {
      super(message)
      this.name = "MonthError"
   }
}
class GradeError extends Error {
   constructor(message) {
      super(message)
      this.name = "GradeError"
   }
}
class VacationMonthError extends Error {
   constructor(message) {
      super(message)
      this.name = "VacationMonthError"
   }
}

let month, grade
let divResult = document.querySelector(".result")

try {
   month = parseInt(prompt("Введіть місяць навчання (від 1 до 12):"))
   if (isNaN(month)) throw new MonthError("Місяць повинен бути числом.")
   if (month < 1 || month > 12) throw new MonthError("Місяць повинен бути від 1 до 12.")
   if (month === 6 || month === 7 || month === 8) throw new VacationMonthError("В цей місяць канікули.")
} catch (error) {
   if (error instanceof MonthError || error instanceof VacationMonthError) {
      console.error("Помилка місяця: " + error.message)
      divResult.innerText = "Помилка місяця: " + error.message
      throw error
   } else {
      console.error("Невідома помилка місяця")
   }
}

try {
   grade = parseInt(prompt("Введіть оцінку учня (від 1 до 100):"))
   if (isNaN(grade)) throw new GradeError("Оцінка повинна бути числом.")
   if (grade < 1 || grade > 100) throw new GradeError("Оцінка повинна бути від 1 до 100.")
} catch (error) {
   if (error instanceof GradeError) {
      console.error("Помилка оцінки: " + error.message)
      divResult.innerText = "Помилка оцінки: " + error.message
      throw error 
   } else {
      console.error("Невідома помилка оцінки")
   }
}

if (grade < 60) {
   if (month === 5 || month === 12) {
      divResult.innerText = "Оцінку виправити вже неможливо, це кінець семестру."
   } else {
      divResult.innerText = "Учень може виправити оцінку!"
   }
} else {
   divResult.innerText = "Оцінка хороша, виправляти не потрібно."
}
