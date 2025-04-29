"use strict"
// На сторінці міститься певна кількість кнопок і інпутів. Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.

class Button{
   constructor(container, resultSelector){
      this.container = container
      this.resultSelector = document.querySelector(resultSelector)
      this.count = 0
   }

   init(){
      this.container.addEventListener("click", (e)=> this.counterButton(e))
   }
   counterButton(event){
      const targetEl = event.target
      if (targetEl.tagName === "BUTTON") {
         this.count++
         this.resultSelector.innerText = this.count
      }
      
   }
   render(){
      const buttonCreate = document.createElement("button")
      buttonCreate.innerText = "Button"
      this.container.append(buttonCreate)
   }
}
class Input{
   constructor(container, resultSelector){
      this.container = container
      this.resultSelector = document.querySelector(resultSelector)
      this.count = 0
   }
   init(){
      this.container.addEventListener("click", (e)=> this.counterInput(e))
   }
   counterInput(event){
      const targetEl = event.target
      if (targetEl.tagName === "INPUT") {
         this.count++
         this.resultSelector.innerText = this.count
      }
   }
   render(){
      const div = document.createElement("div")

      const labelCreate = document.createElement("label")
      labelCreate.innerText = "Value"
      div.append(labelCreate)

      const inputCreate = document.createElement("input")
      div.append(inputCreate)

      this.container.append(div)
   }
}
const inputContainer = document.querySelector('.input-container')
const buttonContainer = document.querySelector('.button-container')

const buttonTracker = new Button(buttonContainer, '.result-button')
const inputTracker = new Input(inputContainer, '.result-input')

buttonTracker.init()
inputTracker.init()

for (let i = 0; i < 10; i++) {
   inputTracker.render(inputContainer)
   buttonTracker.render(buttonContainer)
}