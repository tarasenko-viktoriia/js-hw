"use strict"

// Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.

let list = JSON.parse(localStorage.getItem('tasksList')) || ["Помити посуд", "Випити таблетки", "Позайматися спортом", "Поїсти"]

function showReminder() {
   if (list.length === 0) {
      return
   }
   setTimeout(() => {
      let randNumReminder = Math.floor(Math.random() * list.length)
      const reminder = confirm(list[randNumReminder])

      if (reminder) {
         list.splice(randNumReminder, 1)

         localStorage.setItem('tasksList', JSON.stringify(list))
      }

      if (list.length > 0) {
         showReminder()
      } 
   }, 1000)
}

showReminder()