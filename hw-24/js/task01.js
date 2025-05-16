"use strict"
// Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

class PhoneNumber {
   constructor(phoneNumber) {
      this.phoneNumber = phoneNumber
   }

   getOperator(){
      const num = this.phoneNumber
      let result
      if (/^\+380(50|66|95|99|75)/.test(num))
         result = "Vodafone"
      else if(/^\+380(67|68|96|97|98|77)/.test(num))
         result = "Київстар"
      else if(/^\+380(63|73|93)/.test(num))
         result = "Lifecell"
      else result = "Оператор невідомий"

      return result
   }

   [Symbol.toPrimitive](hint){
      if(hint === "string") return this.getOperator()
      else if (hint === "number") return this.phoneNumber
      else return null
   }
}

const numberPhone = new PhoneNumber("+380500000000")
document.write(numberPhone)
