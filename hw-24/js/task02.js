"use strict"
// Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»

class Product{
   constructor(name, price, number){
      this.name = name
      this.price = price
      this.number = number
   }
}

class Shop {
   constructor(products){
      this.products = products
   }

   [Symbol.iterator](){
      let index = 0
      const products = this.products

      return {
         next(){
            if(index < products.length){
               const product = products[index++]
               const total = product.price * product.number
               return {
                  done: false,
                  value: `${product.name} - ${total}`
               }
            } else {
               return {done: true}
            }
         }
      }
   }
}

const products = [
   new Product("Стілець", 350, 12),
   new Product("Стіл", 1200, 5),
   new Product("Шафа", 2400, 3),
   new Product("Ліжко", 3200, 2),
   new Product("Килим", 900, 7),
   new Product("Лампа", 450, 10),
   new Product("Дзеркало", 800, 4),
   new Product("Комод", 1500, 6),
   new Product("Полиця", 600, 8),
   new Product("Пуф", 300, 9),
]

const shop = new Shop(products)

for (const product of shop) {
   document.write(`${product}<br>`);
}