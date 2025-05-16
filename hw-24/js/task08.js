"use strict"
// Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

const resMap = new Map()
for (const el of temperatures) {
   if (resMap.has(el)) resMap.set(el, resMap.get(el) + 1)
   else resMap.set(el, 1)
}

resMap.forEach((value, key) => {
   document.write(`${key}: ${value} <br>`)
})
const roundedSet= new Set()
for (const temp of temperatures) {
   roundedSet.add(Math.ceil(temp))
}

document.write(`Кількість різних показів, що округлены вгору: ${roundedSet.size}`)