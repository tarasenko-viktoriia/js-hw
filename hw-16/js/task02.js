"use strict"
// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. 
// Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, 
// при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 

class TMoney {
    #moneyUSD
    #exchangeRate
    constructor(moneyUSD=0, exchangeRate=42) {
        this.#moneyUSD = moneyUSD
        this.#exchangeRate = exchangeRate
    };
    addingMoney (amountUAH){
        if (amountUAH > 0) return this.#moneyUSD += amountUAH / this.#exchangeRate
        else throw new Error("Сума не може дорівнювати чи буди меншою за 0");
    }
    
    withdrawingMoney (amountUAH){
        if (amountUAH > this.#moneyUSD * this.#exchangeRate) {
            alert(`Ви не можете вилучити ${amountUAH} грн. У вас недостатньо коштів.`)
            return
        }

        if (amountUAH > 0) return this.#moneyUSD -= amountUAH / this.#exchangeRate
        else throw new Error("Сума не може дорівнювати чи буди меншою за 0")
    }
    getNewExchangeRate (){
        if (this.#moneyUSD > 0) {
            return (this.#moneyUSD * this.#exchangeRate + 100) / this.#moneyUSD
        } else {
            throw new Error("Неможливо визначити курс (баланс = 0)");
        }
    }
    toString() {
        return `На рахунку ${this.#moneyUSD.toFixed(2)} доларів США`
    }
}
const myMoney = new TMoney()// Створюємо об'єкт
myMoney.addingMoney(500)// Додаємо 500 грн
document.write(myMoney.toString() + "<br>") 

myMoney.withdrawingMoney(200)// Знімаємо 200 грн
document.write(myMoney.toString() + "<br>")

// Отримуємо новий курс
document.write(`Новий курс: ${myMoney.getNewExchangeRate().toFixed(2)} грн/USD`)