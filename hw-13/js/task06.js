"use strict"
// З використанням замикань  ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

if (confirm('Почати тестування?')) {

   function letterIterator(word) {
      let index = 0

      return function () {
         if (index < word.length) {
               return word[index++]
         } else {
               return null
         }
      };
   }


   function translationGame() {
      let secretWord = "banana"
      let hint = "Це фрукт, що полюбляють мавпи. Введіть по одній літері цього слова англійською мовою."
      let getNextLetter = letterIterator(secretWord)
      let correctCount = 0

      alert(hint)

      for (let i = 0; i < secretWord.length; i++) {
         let correctLetter = getNextLetter()
         let userInput = prompt(`Введіть літеру ${i + 1}:`)

         if (userInput === correctLetter) {
            correctCount++
         }
      }

      alert(`Гра завершена! Ви вгадали ${correctCount} з ${secretWord.length} букв.`)
   }

   translationGame()
}