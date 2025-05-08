"use strict"
// Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції <br>
//       Вивести всіх простих клієнтів;
//       Вивести всіх клієнтів GoldenClient;
//       Знайти сумарну кількість грошей на рахунку;

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

   render() {
      const div = document.createElement('div')
      div.innerText = this.toString()
      return div
   }
}

class GoldenClient extends Client {
   constructor(id, fullName, sumMoney, limit, percentage) {
      super(id, fullName, sumMoney)
      this.limit = limit
      this.percentage = percentage
      this.creditMoney = 0
   }

   addMoney (numMoney){
      if(numMoney>0) return this.sumMoney +=numMoney
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

   render() {
      const div = document.createElement('div')
      div.innerText = this.toString()
      return div
   }
}

class Bank {
   constructor(){
      this.clients = []
   }

   addClient(client){
      this.clients.push(client)
   }
   getTotalMoney (){
      return this.clients.reduce((prevSum, client) => prevSum+=client.sumMoney,0)
   }

   showSimpleClients() {
      return this.clients.filter(client => client.limit === undefined)
   }

   showGoldenClients() {
      return this.clients.filter(client => client.limit !== undefined)
   }

   renderClients(container) {
      const simpleTitle = document.createElement('h2')
      simpleTitle.innerText = "Прості клієнти:"
      container.append(simpleTitle)

      this.showSimpleClients().forEach(client => container.append(client.render()))

      const goldenTitle = document.createElement('h2')
      goldenTitle.innerText = "Golden клієнти:"
      container.append(goldenTitle)

      this.showGoldenClients().forEach(client => container.append(client.render()))

      const total = document.createElement('h2')
      total.innerText = `Сумарна кількість грошей: ${this.getTotalMoney()} грн.`
      container.append(total)
   }
}

const bank = new Bank()
bank.addClient(new Client(1, "Ivanov Ivan", 40000))
bank.addClient(new GoldenClient(2, "Petrenko Petro", 10000, 5000, 10))
bank.addClient(new Client(3, "Sydorenko Svitlana", 20000))

const container = document.querySelector(".container")
bank.renderClients(container)