"use strict"
// 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази). (З)
// 2. Дано масив рядків. Вивести ті, у яких немає цифр. (З)
// 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
// 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
// 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.(З)
// 6. Дано рядок тексту, вивести усі числа, які є у тексті.(З)
// 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано. (З)
// 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
// 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
// 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
// 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
// 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
// 13. Вибрати усі роки після 2021 року з отриманого повідомлення
// 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
// 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
// 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
// 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним

const arr = ["Ivan", "Olga23", "Petr - 45 years old", "Viktor Ivanov"]

const str = "Я буду вдома о 16 годині. А в 17 годині вже бути йти назад!"

function render(numTask, data){
   const resultDiv = document.getElementById(`task${numTask}`)

   if (!resultDiv) return

   if(Array.isArray(data)) resultDiv.innerText = data.join('\n')
   else resultDiv.innerText = data
}
// ====================================1

function getStringWithNum (arr){
   const regex = /\d/
   return arr.filter(str => regex.test(str))
}

const result1 = getStringWithNum(arr)
render(1, result1)

// ====================================2

function getStringWithoutNum (arr){
   const regex = /^\D*$/
   return arr.filter(str => regex.test(str))
}

const result2 = getStringWithoutNum(arr)
render(2, result2)

// ====================================5

function getStringWithNum1OrNum3 (arr){
   const regex = /(1|3)/
   return arr.filter(str => regex.test(str))
}

const result5 = getStringWithNum1OrNum3(arr)
render(5, result5)

// ====================================6

function getNum (str){
   const regex = /\d+/g
   return str.match(regex)
}

const result6 = getNum (str)
render(6, result6)

// ====================================7

function getPunctuationMarks (str){
   const regex = /[,.!?:;-]/g
   return str.match(regex)
}

const result7 = getPunctuationMarks(str)
render(7, result7)