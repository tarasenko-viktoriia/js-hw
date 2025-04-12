"use strict"
// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу toString.

class TDate {
   constructor(day, month, year) {
      this.day = day
      this.month = month
      this.year = year
   }
   addDays(day){
      let date = new Date(this.year, this.month - 1, this.day)
      date.setDate(date.getDate() + day)

      this.day = date.getDate()
      this.month = date.getMonth() + 1
      this.year = date.getFullYear()
   }
   addMonth(months) {
      let newMonth = this.month + months
      if (newMonth > 12) {
         this.year += Math.floor(newMonth / 12)
         newMonth = newMonth % 12
         if (newMonth === 0) {
            newMonth = 12
         }
      } else if (newMonth <= 0) {
         this.year += Math.floor(newMonth / 12) - 1
         newMonth = 12 + (newMonth % 12)
      }

      this.month = newMonth
   }
   addYears(years){
      this.year += years
   }
   toString() {
      const days = this.day.toString().padStart(2, '0');
      const months = this.month.toString().padStart(2, '0');
      return `${days}.${months}.${this.year}<br>`;
   }
}
const myTime = new TDate(4, 2, 1997)
document.write(myTime.toString())
myTime.addYears(10)
document.write(myTime.toString())
myTime.addMonth(10)
document.write(myTime.toString())
myTime.addDays(40)
document.write(myTime.toString())