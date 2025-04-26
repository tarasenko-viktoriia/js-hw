"use strict"
// Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження). На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків) 

class Person {
   constructor(name, age, address) {
      this.name = name
      this.age = age
      this.address = address
   }
   birthYear(){
      const year = new Date().getFullYear()
      return year - this.age
   }
   toString (){
      return `Ім'я: ${this.name}, вік: ${this.age}, адреса: ${this.address}, рік народження: ${this.birthYear()}`
   }
}

class Worker extends Person {
   constructor (name, age, address, position, salary, tax){
      super(name, age, address)
      this.position = position
      this.salary = salary
      this.tax = tax
   }
   annualSalary (){
      return 12*this.salary
   }
   annualTaxes (){
      return this.annualSalary() * (this.tax/100)
   }
   toString() {
      return `${super.toString()}, посада: ${this.position}, місячна зарплата: ${this.salary} грн., річна зарплата: ${this.annualSalary()} грн., податки за рік: ${this.annualTaxes()} грн.`;
   }
}

const person1 = new Worker ("Ivan", 27, "Ukraine", "Developer", 30000, 23)
const container = document.querySelector(".container")
container.innerText = person1