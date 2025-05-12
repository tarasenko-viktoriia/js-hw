"use strict"

// Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.

class TaskReminder {
   constructor(defaultTasks, storageKey = 'tasksList', interval = 1000) {
      this.defaultTasks = defaultTasks
      this.storageKey = storageKey
      this.interval = interval
      this.tasks = this.loadTasks()
      this.timeoutId = null
   }

   loadTasks() {
      const stored = localStorage.getItem(this.storageKey)
      return stored ? JSON.parse(stored) : [...this.defaultTasks]
   }

   saveTasks() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tasks))
   }

   getRandomIndex() {
      return Math.floor(Math.random() * this.tasks.length)
   }

   showTask() {
      if (this.tasks.length === 0) {
         this.stop()
         return
      }

      const index = this.getRandomIndex()
      const confirmed = confirm(this.tasks[index])

      if (confirmed) {
         this.tasks.splice(index, 1)
         this.saveTasks()
      }

      if (this.tasks.length > 0) {
         this.scheduleNext()
      }
   }

   scheduleNext() {
      this.timeoutId = setTimeout(() => this.showTask(), this.interval)
   }

   start() {
      if (!this.timeoutId) {
         this.scheduleNext()
      }
   }

   stop() {
      if (this.timeoutId) {
         clearTimeout(this.timeoutId)
         this.timeoutId = null
      }
   }
}

const initialTasks = ["Помити посуд", "Випити таблетки", "Позайматися спортом", "Поїсти"]
const reminder = new TaskReminder(initialTasks)
reminder.start()


// let list = JSON.parse(localStorage.getItem('tasksList')) || ["Помити посуд", "Випити таблетки", "Позайматися спортом", "Поїсти"]

// function showReminder() {
//    if (list.length === 0) {
//       return
//    }
//    setTimeout(() => {
//       let randNumReminder = Math.floor(Math.random() * list.length)
//       const reminder = confirm(list[randNumReminder])

//       if (reminder) {
//          list.splice(randNumReminder, 1)

//          localStorage.setItem('tasksList', JSON.stringify(list))
//       }

//       if (list.length > 0) {
//          showReminder()
//       } 
//    }, 1000)
// }

// showReminder()
