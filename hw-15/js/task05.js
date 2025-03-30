"use strict"
// Розробити клас «Керівник танців»
// Поля
// Масив імен хлопців
// Масив імен дівчат
// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

class DanceDirector {
   constructor(){
      this.boysName = ["Ivan", "Petro", "Oleg"]
      this.girlsName = ["Olga", "Anna", "Maria"]
   }
   getRandomBoyName (){
      const randomIndex = Math.floor(Math.random() * this.boysName.length)
      return this.boysName[randomIndex]
   }
   getRandomGirlName (){
      const randomIndex = Math.floor(Math.random() * this.girlsName.length)
      return this.girlsName[randomIndex]
   }
   getDancingCouple (){
      this.boy = this.getRandomBoyName()
      this.girl = this.getRandomGirlName()
      document.write(`Пара для танців: ${this.boy} та ${this.girl}<br>`)
   }
   run (){
      setInterval(() => {
         this.getDancingCouple ()
      }, 5000);
   }
}
const obj = new DanceDirector ()
obj.run ()