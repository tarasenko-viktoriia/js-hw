"use strict"
// Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Поля(властивості)
// Масив, у якому зберігається поле з зайцями
// Методи (дії)
// Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля
if (confirm('Почати тестування?')) {
   const shootingGallery = {
      playingField: [0, 0, 0, 1],

      shoot(){
         const userShoot = parseInt(prompt(`Введіть позицію пострілу від 1 до ${this.playingField.length}`))

         if(this.playingField[userShoot - 1] === 1){
            alert("Ви влучили у зайця!")
            this.playingField[userShoot - 1] = 0
         } else alert('Немає зайця в цьому квадраті.')
      },
      getPlayingField (){
         document.write(this.playingField)
      }
   }
   shootingGallery.shoot()
   shootingGallery.getPlayingField ()
}