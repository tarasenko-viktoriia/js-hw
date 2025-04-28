"use strict"
// Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.

class Star {
   constructor(maxStep, cssObj) {
      this.maxStep = maxStep
      this.cssObj = cssObj
      this.minSize = 3
      this.maxSize = 10
      this.currentSize = this.minSize
      this.growStep = this.maxStep
   }

   getRandomValue(minValue, maxValue) {
      return (minValue + Math.floor(Math.random() * (maxValue - minValue + 1)))
   }

   setInitPositionCoordinates() {
      this.left = this.getRandomValue(0, 100)
      this.top = this.getRandomValue(0, 100)
   }

   setStarPosition() {
      this.starElement.style.top = this.top + "%"
      this.starElement.style.left = this.left + "%"
   }

   setInitStarPosition() {
      this.setInitPositionCoordinates()
      this.setStarPosition()
   }

   update() {
      this.currentSize += this.growStep
      if (this.currentSize >= this.maxSize) {
         this.setInitPositionCoordinates()
         this.currentSize = this.minSize
      }
      this.starElement.style.width = this.currentSize + "px"
      this.starElement.style.height = this.currentSize + "px"
      this.setStarPosition()
   }
   start(interval = 150) {
      this.intervalId = setInterval(() => {
         this.update()
      }, interval)
   }

   render(containerElement) {
      const star = document.createElement("div")
      star.className = this.cssObj.containerClass
      this.starElement = star
      this.setInitStarPosition()
      if (containerElement) containerElement.append(star)
   }
}

const stars = []
const container = document.getElementById("container")

for (let i = 0; i < 200; i++) {
   const star = new Star(Math.random() * 0.5 + 0.2, {containerClass: "star"})
   star.render(container)
   star.start(100)
   stars.push(star)
}
