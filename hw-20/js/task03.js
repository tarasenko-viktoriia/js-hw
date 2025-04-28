"use strict"
// На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата, стаж, номер відділу, порядковий номер). Додати подію обробки події click на форму і якщо клік на внутрішньому input, то автоматично замінювати значення його на 0. Використати делегування

const inputItem = ["Вік", "Зріст", "Вага", "Заробітна плата", "Стаж", "Номер відділу", "Порядковий номер"]
const cssObj = {
   inputStyle: "input-item",
}

class Form {
   constructor(inputItem, cssObj) {
      this.inputItem = inputItem
      this.cssObj = cssObj
   }

   render(formContainer) {
      this.form = document.createElement("form")
      this.form.className = "form"

      for (let i = 0; i < this.inputItem.length; i++) {
         const divInput = document.createElement("div")
         divInput.className = this.cssObj.inputStyle

         const label = document.createElement("label")
         label.innerText = this.inputItem[i]
         divInput.append(label)

         const input = document.createElement("input")
         input.type = "number"
         divInput.append(input)

         this.form.append(divInput)
      }

      this.form.addEventListener("click", (event) => {
         this.inputClick(event)
      })

      if (formContainer) {
         formContainer.append(this.form)
      }
   }

   inputClick(event) {
      const targetEl = event.target
      if (targetEl.tagName === "INPUT") {
         targetEl.value = 0
      }
   }
}

const form = new Form(inputItem, cssObj)
const formContainer = document.querySelector(".form-container")
form.render(formContainer)
