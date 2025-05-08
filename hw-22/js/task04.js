"use strict"
// Розробити Класи House, Dog, Bird. Подумайте яким має бути спільний клас предок.

const imagesObj = {
   house: "../img/house.png",
   dog: "../img/dog.png",
   bird: "../img/bird.png",
}
class MovableObj {
   constructor(x, y, imagesObj, interval){
      this.x = x
      this.y = y
      this.imagesObj = imagesObj
      this.interval = interval
      this.element = null
   }

   render (containerSelector){
      const img = document.createElement("img")
      img.src = this.imagesObj
      img.className = "img"
      img.style.top = this.y + "px"
      img.style.left = this.x + "px"
      img.style.transition = "all 0.5s"

      this.element = img

      if(containerSelector) document.querySelector(containerSelector).append(img)
   }
   update(){

   }

   start (){
      this.timer = setInterval(() => this.update(), this.interval)
   }
}
class House extends MovableObj{
   constructor(x, y, imagesObj, interval){
      super(x, y, imagesObj.house, interval)
      this.growing = true
   }
   update(){
      if(this.growing) this.element.style.transform = "scale(1.2)"
      else this.element.style.transform = "scale(1)"
      this.growing = !this.growing
   }
}

class Dog extends MovableObj{
   constructor(x, y, imagesObj, interval){
      super(x, y, imagesObj.dog, interval)
   }
   update() {
      const randX = -500 + Math.floor(Math.random() * 1501)
      this.element.style.transform = `translateX(${randX}px)`
   }
}
class Bird extends MovableObj{
   constructor(x, y, imagesObj, interval){
      super(x, y, imagesObj.bird, interval)
   }
   update(){
      const randX = -500 + Math.floor(Math.random() * 1501);
      const randY = -300 + Math.floor(Math.random() * 601);
      this.element.style.transform = `translate(${randX}px, ${randY}px`
   }
}
const house = new House(100, 100, imagesObj, 2000)
house.render("body")
house.start()

const dog = new Dog(300, 300, imagesObj, 1500)
dog.render("body")
dog.start()

const bird = new Bird(600, 100,imagesObj, 1000)
bird.render("body")
bird.start()