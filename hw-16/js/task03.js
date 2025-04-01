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
    constructor(name){
        this.name = name
        this.foundationDate = new this.Date(year, month);
        this.services = [];
        this.branches = [];
    }

    Date = class {
        constructor(year, month) {
            this.year = year;
            this.month = month;
        }
    };
    Service = class {
        constructor(name, value, deadline) {
            this.name = name;
            this.value = value;
            this.deadline = deadline;
        }
    };
    Branch = class {
        constructor(country, city, street, houseNumber) {
            this.country = country;
            this.city = city;
            this.street = street;
            this.houseNumber = houseNumber;
        }
        
    };
    toSting(){
        return ``
    }
}