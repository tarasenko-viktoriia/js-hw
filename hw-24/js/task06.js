"use strict"
// Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

const logins = [
   "ivanov", "petrenko", "ivanov", "bondarenko",
   "petrenko", "ivanov", "shevchenko", "bondarenko",
   "ivanov", "shevchenko"
]

const resMap = new Map()
for (const el of logins){
   if(resMap.has(el)) resMap.set(el, resMap.get(el) + 1)
   else resMap.set(el, 1)
}

resMap.forEach((count, login) => {
   document.write(`${login}: ${count} <br>`)
})