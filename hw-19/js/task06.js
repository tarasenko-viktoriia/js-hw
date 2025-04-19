"use strict"
// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

class athletesManager {
   constructor(athletesList) {
      this.allAthletes = athletesList
      this.selectedAthletes = []
      this.render()
   }
   moveToSelected(name) {
      this.allAthletes = this.allAthletes.filter(a => a !== name)
      this.selectedAthletes.push(name)
      this.render()
   }

   moveToAll(name) {
      this.selectedAthletes = this.selectedAthletes.filter(a => a !== name)
      this.allAthletes.push(name)
      this.render()
   }

   createList(container, title, list, isMain) {
      container.innerHTML = ''
      const heading = document.createElement('h2')
      heading.innerText = title
      container.appendChild(heading)
   
      const ul = document.createElement('ul')
      list.forEach(name => {
         const li = document.createElement('li')
         li.innerText = name
   
         const btn = document.createElement('button')
         btn.innerText = isMain ? '➡️' : '⬅️'
         btn.style.backgroundColor = isMain ? 'lightgreen' : 'lightcoral'
         btn.onclick = () => isMain ? this.moveToSelected(name) : this.moveToAll(name)
   
         li.appendChild(btn)
         ul.appendChild(li)
      })
   
      container.appendChild(ul)
   }
   render() {
      const generalContainer = document.getElementById('all-athletes')
      const chosenContainer = document.getElementById('selected-athletes')
      this.createList(generalContainer, 'Загальний список', this.allAthletes, true)
      this.createList(chosenContainer, 'Обрані спортсмени', this.selectedAthletes, false)
   }
}

const athletesList = ['John Depp', 'Sara Wik', 'Den Miro', 'Alan Woo', 'Olga Sich', 'Ivan Hal']
const manager = new athletesManager(athletesList)