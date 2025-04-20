"use strict"
// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми
class Firm {
   constructor(name, registrationNumber){
      this.name = name
      this.registrationNumber = registrationNumber
   }

   toString(){
      return `Назва фірми виробника: ${this.name}, реєстраційний номер фірми виробника: ${this.registrationNumber}`
   }
}

class Product {
   constructor(name, unit, quantity, firmName, firmRegNumber) {
      this.name = name
      this.unit = unit
      this.quantity = quantity
      this.firm = new Firm(firmName, firmRegNumber)
   }

   toString(){
      return `Назва товару: ${this.name}, одиниця виміру: ${this.unit}, кількість: ${this.quantity}, ${this.firm}.<br>`
   }
}

class Warehouse {
   constructor(){
      this.products = []
   }

   registerProduct(product){
      const productRegister = this.products.find(p => p.name === product.name)
      if (productRegister) {
         productRegister.quantity += product.quantity
      } else {
         this.products.push(product)
      }
   }

   shipProduct(productName, amount){
      const productToShip = this.products.find(product => product.name === productName)

      if (productToShip) {
         if (productToShip.quantity >= amount) {
            productToShip.quantity -= amount
            document.write(`Відвантаження ${productToShip.name} відбулося у кількості ${amount} ${productToShip.unit}<br>`)
         } else {
            document.write(`Відвантаження ${productToShip.name} не відбулося. На складі недостатня кількість.<br>`)
         }
      } else {
         document.write(`Товар не знайдено.<br>`)
      }
   }

   filterByProductName(name) {
      return this.products.filter(product => product.name === name)
   }

   filterByFirmName(firmName) {
      return this.products.filter(product => product.firm.name === firmName)
   }

   listProducts(){
      this.products.forEach(product => document.write(product))
   }
}
const firm1 = new Firm("FFF", "12122")
const firm2 = new Firm("AAA", "1255")

const product1 = new Product("Вода", "літрів", 100, firm1.name, firm1.registrationNumber)
const product2 = new Product("Сік", "літрів", 50, firm2.name, firm2.registrationNumber)

const warehouse = new Warehouse() 
warehouse.registerProduct(product1)
warehouse.registerProduct(product2)

warehouse.listProducts()

warehouse.shipProduct("Вода", 30)
warehouse.shipProduct("Сік", 60)

warehouse.listProducts()

const product3 = new Product("Вода", "літрів", 50, firm1.name, firm1.registrationNumber)
warehouse.registerProduct(product3)
warehouse.listProducts()
