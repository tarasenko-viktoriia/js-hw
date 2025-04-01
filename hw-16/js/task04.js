"use strict"
// Розробити клас Baner
// Поля
// Масив об’єктів ( графічних зображень та посилань на сайти)
// методи
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера


class Baner {
    constructor () {
        this.banners = [
            { 
                image: "../img/img-01.jpg", 
                link: "https://www.google.com" 
            },
            { 
                image: "../img/img-02.jpg", 
                link: "https://www.facebook.com" 
            },
            { 
                image: "../img/img-03.jpg", 
                link: "https://www.linkedin.com" 
            }
        ];
    }

    getRandomObj (){
        const randomIndex = Math.floor(Math.random() * this.banners.length)
        return this.banners[randomIndex]
    }
    getBaner(){
        const banner = this.getRandomObj()
        document.write(`<a href="${banner.link}" target="_blank">
                            <img src="${banner.image}" alt="Banner">
                        </a>`)
    }
}
const obj = new Baner()
obj.getBaner()