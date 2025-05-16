"use strict"
// Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для кожного із авторів.

const books = [
   { title: "Математика", year: 2020, author: "Іваненко", price: 200 },
   { title: "Історія України", year: 2018, author: "Петренко", price: 180 },
   { title: "Алгебра", year: 2021, author: "Іваненко", price: 220 },
   { title: "Література", year: 2019, author: "Сидоренко", price: 150 },
   { title: "Геометрія", year: 2022, author: "Іваненко", price: 210 },
   { title: "Всесвітня історія", year: 2020, author: "Петренко", price: 190 },
]

const resMap = new Map()
for (const book of books) {
   const author = book.author
   const price = book.price
   if (resMap.has(author)) 
      resMap.set(author, resMap.get(author) + book.price)
   else 
      resMap.set(author, book.price)
}

resMap.forEach((count, author) => {
   document.write(`${author}: ${count}<br>`)
})