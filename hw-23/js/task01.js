"use strict"
// 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази). (З)
// 2. Дано масив рядків. Вивести ті, у яких немає цифр. (З)
// 3. Дано масив рядків. Вивести ті, у яких є голосні літери.(З)
// 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.(З)
// 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.(З)
// 6. Дано рядок тексту, вивести усі числа, які є у тексті.(З)
// 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано. (З)
// 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками. (З)
// 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).(З)
// 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.(З)
// 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.(З)
// 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)(З)
// 13. Вибрати усі роки після 2021 року з отриманого повідомлення (З)
// 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38») (З)
// 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс. (З)
// 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
// 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним(З)

const arr = ["Ivan", "Olga23", "123123", "Рррр", "Petr - 45 years old", "Viktor Ivanov"]

const str = "Я буду вдома о 16 годині, а в 17 годині вже буду йти назад. О 22 знову буду йти додому!"

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

// ====================================3

function getStringWithVowels(arr){
   const regex = /[аеиіоуєюяaeiouy]/i
   return arr.filter(str => regex.test(str))
}

const result3 = getStringWithVowels(arr)
render(3, result3)


// ====================================4

function getStringWithoutVowels(arr){
   const regex = /[аеиіоуєюяaeiouy]/i
   return arr.filter(str => !regex.test(str))
}

const result4 = getStringWithoutVowels(arr)
render(4, result4)

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

// ====================================8

function getSentenceComponents (){
   const regex = /[,.!?:;-]/g
   return str.split(regex)
}

const result8 = getSentenceComponents(str)
render(8, result8)

// ====================================9
const dateStr = "Сьогодні 31.05.2025, а в Петра в щоденнику - 32.05.2025."
function getDate (str){
   const regex = /(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}/g
   return str.match(regex)
}

const result9 = getDate(dateStr)
render(9, result9)

// ====================================10
const str2 = "Іван заробив 325 грн., Петро - 470 грн., Марія - 50 грн., а Ольга - 10 грн."
function getCountNum (str){
   const regex = /\b\d{2}\b/g
   const matches = str.match(regex)
   return matches ? matches.length : 0
}

const result10 = getCountNum(str2)
render(10, result10)

// ====================================11
const numCardsStr = "Номер картки Ольги М.: 4444-4444-4444-4444. Номер картки Петра С. 1111111111111111."
function getNumsCards (str){
   const regex = /\d{4}([-\./\\]?\d{4}){3}/g
   return str.match(regex)
}

const result11 = getNumsCards(numCardsStr)
render(11, result11)

// ====================================12
const site1= "https://ggggg.gov.ua"
const site2= "https://ggggg.gov2.ua"
const site3= "https://ggggg.3gov.ua"
function isDovSite(str){
   const regex = /\.gov\.[a-z]{2,}/
   return regex.test(str)
}
const resultDiv = document.getElementById('task12')
const result12 = isDovSite(site2)
result12 ? resultDiv.innerText = "Це урядовий сайт" : resultDiv.innerText = " Це НЕ урядовий сайт"


// ====================================13
const yearsStr = "Найважливвіші роки: 2014, 2019, 2022, 2045, 2500, 3000"
function getYears (str){
   const regex = /\b(202[2-9]|20[3-9]\d|2[1-9]\d\d|[3-9]\d\d\d)\b/g
   return str.match(regex)
}

const result13 = getYears(yearsStr)
render(13, result13)

// ====================================14

function isUAPhoneNum (num){
   const regex = /^\+38/g
   return regex.test(num)
}
document.getElementById("checkBtn").onclick = function() {
   const phoneNum = document.querySelector("#phoneNum").value.trim()
   const result = isUAPhoneNum(phoneNum)
   const resultSpan = document.getElementById("task14")
   result ? resultSpan.innerText = "Це український номер" : resultSpan.innerText = "Це НЕ український номер"
}

// ====================================15

function getFullName (name){
   const regex = /\s+/g
   return name.replace(regex, "-")
}
document.getElementById("btn").onclick = function() {
   const fullName = document.querySelector("#fullName").value.trim()
   const result = getFullName (fullName)
   const resultSpan = document.getElementById("task15")
   result ? resultSpan.innerText = result : resultSpan.innerText = "Ви ввели некоректні значення"
}
// ====================================16
const userDate = prompt("Введіть дату у форматі «день.місяць.рік»")
function getDateFormat (date){
   const regex = /\.+/g
   return date.replace(regex, "/")
}

const result16 = getDateFormat(userDate)
render(16, result16)

// ====================================17
const userDay = prompt("Введіть будь-який номер дня від 1 до 7 чи назву дня (sun,mon,tue,wed,thu,fri,sat)")
function getUserDay (str){
   const validRegex = /^(1|2|3|4|5|6|7|sun|mon|tue|wed|thu|fri|sat)$/i
   const weekendRegex = /^(6|7|sun|sat)$/i

   if (!validRegex.test(str)) {
      throw new Error("Некоректне значення")
   }
   return weekendRegex.test(str)
}

const resultDivUserDay = document.getElementById("task17")
const result17 = getUserDay(userDay)
result17 ? resultDivUserDay.innerText = "Це вихідний день" : resultDivUserDay.innerText = "Це робочий день"