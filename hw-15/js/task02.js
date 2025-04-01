"use strict"
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів
if (confirm('Почати тестування?')) {
    const auto = {
        brand: "Toyota",
        tankSize: 50,
        numberLitresAvailable: 20,
        numberSeats: 5,
        numberPassengers: 3,

        tankRefuelling () {
            const numLitres = parseInt(prompt(`Введіть на скільки літрів ви хочете заправитись. У вас бак на ${this.tankSize}. В баку ${this.numberLitresAvailable}`))
            
            if (isNaN(numLitres) || numLitres < 0) throw new Error("Ви ввели некоректне значення!")

            const newNumberLitresAvailable = this.numberLitresAvailable + numLitres

            if (newNumberLitresAvailable > this.tankSize) {
                const notEnoughLitres = this.tankSize - this.numberLitresAvailable
                alert(`Для заправки на ${numLitres} літрів не вистачило місця в баку, залишилось місце на ${notEnoughLitres} літрів.`)
                this.numberLitresAvailable = this.tankSize
            } else {
                this.numberLitresAvailable += numLitres
            }
        },
        getNumberPassengers () {
            document.write(`Кількість пасажирів: ${this.numberPassengers}`)
        },
        additionNumberPassengers() {
            const numPassengers = parseInt(prompt(`Введіть кількість пасажирів, що хочете додати. У вас є ${this.numberSeats - this.numberPassengers} вільних місць.`))
        
            if (isNaN(numPassengers) || numPassengers < 0) throw new Error("Ви ввели некоректне значення!")
        
            const newNumberPassengers = this.numberPassengers + numPassengers
        
            if (newNumberPassengers > this.numberSeats) {
                const notEnoughSeats = newNumberPassengers - this.numberSeats
                alert(`Для ${notEnoughSeats} пасажирів не вистачило місця.`)
                this.numberPassengers = this.numberSeats
            } else {
                this.numberPassengers = newNumberPassengers
            }
        },
        passengerDisembarkation () {
            const numPassengersForDisembarkation = parseInt(prompt(`Введіть кількість пасажирів, що хочете висадити. У вас ${this.numberPassengers} пасажирів.`))
            if (isNaN(numPassengersForDisembarkation) || numPassengersForDisembarkation < 0 || numPassengersForDisembarkation > this.numberPassengers) throw new Error("Ви ввели некоректне значення!")
            this.numberPassengers -= numPassengersForDisembarkation
        },
    }

    auto.getNumberPassengers()
}
