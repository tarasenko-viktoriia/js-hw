"use strict"
// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

class MyArray {

  static getPositiveNum (arr){
    let positiveNum = 0
    for (const element of arr) {
      if(element > 0) positiveNum++
    }

    return positiveNum
  }
  static getNegativeNum (arr){
    let negativeNum = 0
    for (const element of arr) {
      if(element < 0) negativeNum++
    }
    return negativeNum
  }

  static getNumOfRepetitions(arr, num){
    let numOfRepetitions = 0
    for (const element of arr) {
      if(element === num) numOfRepetitions++
    }
    return numOfRepetitions
  }
} 
const arr = [1, -3, 5, 1, -2]
const num = 1
document.write(`Кількість додатніх чисел: ${MyArray.getPositiveNum(arr)} <br>`)
document.write(`Кількість від'ємних чисел: ${MyArray.getNegativeNum(arr)} <br>`)
document.write(`Кількість разів, коли зустрічається число ${num}: ${MyArray.getNumOfRepetitions(arr, num)} <br>`)
