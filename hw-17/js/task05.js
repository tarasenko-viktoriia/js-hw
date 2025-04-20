"use strict"
// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів  
//       Приклад.
//       testsList= [
//          {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//          {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
//       ]
//       Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 
//       Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран. 

class TestData {
   constructor(firstNum, secondNum,opration, userAnswer, correctAnswer) {
      this.firstNum = firstNum
      this.secondNum = secondNum
      this.operation = opration 
      this.userAnswer = userAnswer
      this.correctAnswer = userAnswer
   }
}
class History {
   constructor(){
      this.testList = []
   }

   addTest (test) {
      this.testList.push(test)
   }

   printHistory (){
      this.testList.forEach(test =>{
         document.write(`Задача: ${test.firstNum} ${test.operation} ${test.secondNum} <br>`)
         document.write(`Ваша відповідь: ${test.userAnswer}, правильна відповідь: ${test.correctAnswer}<br>`);
      })
   }
}
class MultChecker {
   constructor (){
      this.operation = "*"
   }
   generateTest (){
      const firstNum = 1 + Math.floor(Math.random() * 10)
      const secondNum = 1 + Math.floor(Math.random() * 10)
      const correctAnswer = firstNum * secondNum
      return {firstNum, secondNum, correctAnswer}
   }

   checkAnswer (userAnswer, correctAnswer) {
      return userAnswer === correctAnswer
   }
}

class AddChecker  {
   constructor (){
      this.operation = "+"
   }
   generateTest (){
      const firstNum = 1 + Math.floor(Math.random() * 10)
      const secondNum = 1 + Math.floor(Math.random() * 10)
      const correctAnswer = firstNum + secondNum
      return {firstNum, secondNum, correctAnswer}
   }

   checkAnswer (userAnswer, correctAnswer) {
      return userAnswer === correctAnswer
   }
}

class TestManager {
   static manager
   constructor(){
      if(TestManager.manager) return TestManager.manager
      this.history = new History()
      this.multChecker = new MultChecker()
      this.addChecker = new AddChecker()
      TestManager.manager = this
   }

   startTest(num) {
      let completedTests = 0
      const timer = setInterval(() => {
         if(completedTests >= num){
            clearInterval(timer)
            this.history.printHistory()
            return
         }

         const isMultiplication = Math.random() < 0.5
         const checker = isMultiplication ? this.multChecker : this.addChecker
         const { firstNum, secondNum, correctAnswer } = checker.generateTest()

         const userAnswer = prompt(`${firstNum} ${checker.operation} ${secondNum} = `)
         const isCorrect = checker.checkAnswer(Number(userAnswer), correctAnswer)
         const testData = new TestData(firstNum, secondNum, checker.operation, Number(userAnswer), correctAnswer)

         this.history.addTest(testData)
         completedTests++
      }, 2000)
   }
}

const testManager = new TestManager()
testManager.startTest(5)