"use strict"
// Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

function* rnd(num) {
   for (let i = 0; i < num; i++) {
      yield 2 * Math.floor(Math.random() * 1000) + 2
   }
}

for (const element of rnd(5)) {
   document.write(`${element}<br>`)
}