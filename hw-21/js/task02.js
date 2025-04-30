"use strict"
// Створити клас Client. На основі цього класу створити клас GoldenClient

class Client {
   constructor(id, fullName, sumMoney) {
      this.id = id
      this.fullName = fullName
      this.sumMoney =sumMoney
   }

   addMoney (numMoney){
      if(numMoney>0) return this.sumMoney +=numMoney
   }
   withdrawal (numMoney) {
      if (numMoney <= this.sumMoney) return this.sumMoney-=numMoney
      else throw new Error("На рахунку недостатньо коштів");
   }

   toString (){
      return `id: ${this.id}, ПІБ: ${this.fullName}, кількість грошей на рахунку: ${this.sumMoney}`
   }
}

class GoldenClient extends Client {
   constructor(id, fullName, sumMoney, limit, percentage) {
      super(id, fullName, sumMoney)
      this.limit = limit
      this.percentage = percentage
      this.creditMoney = 0
   }

   withdrawal (numMoney) {
      if(numMoney > (this.sumMoney+this.limit)) throw new Error("На рахунку недостатньо коштів")
      else{
         if (numMoney <= this.sumMoney) {
            this.sumMoney -= numMoney
         } else {
            this.creditMoney = numMoney - this.sumMoney
            this.sumMoney = 0
         }
      }
      return this.sumMoney
   }

   getPenalty (){
      return this.creditMoney * (this.percentage/100)
   }

   toString() {
      return `${super.toString()}, Ліміт кредиту: ${this.limit}, Відсоток кредиту: ${this.percentage}%`;
   }
}

const client1 = new Client(1, "Ivanov Ivan Ivanovich", 40000)
const container = document.querySelector(".container")
container.innerText = client1



