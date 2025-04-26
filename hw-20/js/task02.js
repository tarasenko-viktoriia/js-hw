"use strict"
// Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану.

const imagesObj = {
   wholeTank: "../img/tank.png",
   hitTank: "../img/fire.png",
}

class Tank {
   constructor(imagesObj, maxStep, maxSpeed, cssObj) {
      this.imagesObj = imagesObj
      this.maxStep = maxStep
      this.maxSpeed = maxSpeed
      this.cssObj = cssObj
   }

   getRandomValue(minValue, maxValue) {
      return (minValue + Math.floor(Math.random() *(maxValue - minValue+1)))
   }

   setInitDirection(){
      this.vx = 0
      this.vy = this.getRandomValue(1, this.maxStep)
   }

   updateCoordinates(){
      this.left += this.vx
      if(this.left < 0 || this.left > 100) this.vx = -this.vx
      this.top += this.vy
      if(this.top < 0 || this.top > 100) this.vy = -this.vy
   }

   move(){
      this.updateCoordinates()
      this.setTankPosition()
   }

   setInitPositionCoordinates (){
      this.left = this.getRandomValue(0, 100)
      this.top = 0
   }

   setTankPosition(){
      this.tank.style.top = this.top + "%" 
      this.tank.style.left = this.left + "%"
   }

   setInitTankPosition (){
      this.setInitPositionCoordinates()
      this.setTankPosition()
   }

   onTap(){
      clearInterval(this.interval)
      this.tank.src = this.imagesObj.hitTank
      setTimeout(() => {
         this.tank.style.display = "none"
      }, 1000);
   }

   render(containerSelector){
      const img = document.createElement("img")
      img.src = this.imagesObj.wholeTank
      img.className = this.cssObj.containerClass
      this.tank = img
      this.tank.onclick = this.onTap.bind(this)
      this.setInitTankPosition ()
      this.setInitDirection()
      this.interval = setInterval(() => this.move(), this.maxSpeed)

      if(containerSelector) document.querySelector(containerSelector).append(img)
   }
}

for (let i = 0; i < 10; i++) {
   const c1 = new Tank (imagesObj, Math.random()* 3, Math.random() * 1000, {containerClass: "insect"})
   c1.render("body")
}