"use strict"
// Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

class CompanyCar {
   static car

   constructor (driver, brand, number) {
      if(CompanyCar.car) return CompanyCar.car
      this.driver = driver
      this.brand = brand
      this.number = number
      CompanyCar.car = this
   }

   toString (){
      return `Водій службового авто: ${this.driver}, марка службового авто: ${this.brand}, номер службоовго авто: ${this.number}<br>`
   }
}

const car1 = new CompanyCar("Oleg", "Opel", "121212")
const car2 = new CompanyCar("Petro", "Mercedes", "222222")
document.write(car1)
document.write(car2)