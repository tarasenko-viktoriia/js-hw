"use strict"
// Об’єкт “Фірма” (використати члени-класи)
// поля
// назва фірми;
// дата заснування (рік, місяць);
// послуги (назва послуги, вартість, термін виконання);
// адреси філіалів (країна, місто, вулиця, номер будинку);
// методи
// визначення кількості років існування фірми;
// виведення всіх філіалів фірми у вказаному місті;
// виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

class Firm {
    #name
    #foundationDate
    constructor(name, foundingYear, foundingMonth){
        this.#name = name
        this.#foundationDate = {
            year: foundingYear,
            month: foundingMonth
        };
        this.services = []
        this.branches = []
    }
    addService(name, cost, duration){
        this.services.push(new Service(name, cost, duration))
    }
    addBranch(country, city, street, buildingNumber){
        this.branches.push(new Branch(country, city, street, buildingNumber))
    }
    getBranchesInCity(city) {
        return this.branches.filter(branch => branch.City.toLowerCase() === city.toLowerCase())
    }
    getServicesWithinBudget(cost, duration) {
        return this.services.filter(service => service.Cost <= cost && service.Duration <= duration)
    }
    getNumYears(){
        const currentYear = new Date().getFullYear()
        return currentYear - this.#foundationDate.year
    }
    get Name(){
        return this.#name
    }
    get FoundationDate(){
        return this.#foundationDate
    }
    toString(){
        return `Firm ${this.#name}, founded in ${this.#foundationDate.year}-${this.#foundationDate.month}`
    }
}

class Service {
    #name
    #cost
    #duration
    constructor(name, cost, duration){
        this.#name = name
        this.#cost = cost
        this.#duration = duration
    }
    get Name(){
        return this.#name
    }
    get Cost(){
        return this.#cost
    }
    get Duration(){
        return this.#duration
    }
    toString(){
        return `Service ${this.#name}, cost: ${this.#cost}, duration: ${this.#duration} days`
    }
}

class Branch {
    #country
    #city
    #street
    #buildingNumber
    constructor(country, city, street, buildingNumber){
        this.#country = country
        this.#city = city
        this.#street = street
        this.#buildingNumber = buildingNumber
    }
    get Country(){
        return this.#country
    }
    get City(){
        return this.#city
    }
    get Street(){
        return this.#street
    }
    get BuildingNumber(){
        return this.#buildingNumber
    }
    toString(){
        return `Branch in ${this.#country}, city: ${this.#city}, street: ${this.#street}, building: ${this.#buildingNumber}`
    }
}

// Створення об'єкта компанії
const myCompany = new Firm("TechCorp", 2010, 5)
myCompany.addService("Веб-розробка", 5000, 30)
myCompany.addService("SEO-просування", 1500, 14)
myCompany.addService("Графічний дизайн", 800, 7)

// Додавання філій
myCompany.addBranch("Україна", "Київ", "Хрещатик", 12)
myCompany.addBranch("США", "Нью-Йорк", "5th Avenue", 102)

// Виведення інформації
console.log("Назва компанії:", myCompany.Name)
console.log("Роки існування:", myCompany.getNumYears())

// Філії у Києві
console.log("Філії у Києві:", myCompany.getBranchesInCity("Київ"))

// Послуги в межах бюджету 2000$ та тривалості до 14 днів
console.log("Доступні послуги:", myCompany.getServicesWithinBudget(2000, 14))

// Виведення всієї інформації про компанію
console.log(myCompany.toString())
