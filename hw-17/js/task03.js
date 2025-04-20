"use strict"
// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

class Reminder {
   static reminderOfEvent

   constructor (event) {
      if(Reminder.reminderOfEvent) return Reminder.reminderOfEvent
      this.event = event
      this.count = 0
      this.timerId = null
      Reminder.reminderOfEvent = this
   }
   toString (){
      return `${this.count} - ${this.event}<br>`
   }
   getEvent(){
      this.timerId = setInterval(() => {
         this.count++
         document.write(this.toString())
         
      }, 5000);
   }
   stopTimer(){
      if (this.timerId) {
         clearInterval(this.timerId);
         this.timerId = null;
      }
   }
   changeEvent(newEvent) {
      this.event = newEvent
   }
}

const reminder1 = new Reminder("Поїсти")
reminder1.getEvent()