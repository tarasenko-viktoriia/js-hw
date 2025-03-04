"use strict"
// 1
// const arr = new Array(9).fill(1)
// arr.fill(0, 1, arr.length-1)
// document.write(`${arr}`)

// 2
// const arr = new Array(9).fill(0).map((el, index) => index % 2);
// document.write(`Массив: ${arr}`);

// 3
// const arr = [2, 5, 11, 6, 9, 8, 4]
// const num = arr.reduce((prevNum, el) => (el%2 === 0 ? prevNum + 1 : prevNum), 0)
// document.write(`Массив: ${num}`);

// 4
// const arr = [6, 9, 21, 12, 42]
// const num = arr.reduce((prevNum, el) => (el%3 === 0 && el%7 !== 0 ? prevNum + 1 : prevNum), 0)
// document.write(`Массив: ${num}`);

// 5
// const arr = [3, 9, 21, 12, 2]
// const numFirstEl = arr.reduce((prevNum, el, index, arr) => (el!== arr[0] && el % arr[0] === 0 ? prevNum + 1 : prevNum), 0)
// const numLastEl = arr.reduce((prevNum, el, index, arr) => (el!== arr.at(-1) && el % arr.at(-1) === 0 ? prevNum + 1 : prevNum), 0)
// let result 
// if (numFirstEl > numLastEl) result = "Перший"
// else if (numFirstEl < numLastEl) result = "Другий"
// else result = "Порівну"
// document.write(`${result}`);

//5
// const arr = [3, 9, 21, 12, 4, 8, 10, 2];

// const numFirstEl = arr.filter(el => el !== arr[0] && el % arr[0] === 0).length;
// const numLastEl = arr.filter(el => el !== arr.at(-1) && el % arr.at(-1) === 0).length;

// const result = numFirstEl > numLastEl ? "Перший" : numFirstEl < numLastEl ? "Другий" : "Порівну";

// document.write(result);

//6
// const arr = [3, 9, 2];
// const sum = arr.reduce((prevSum, el)=> (prevSum + el), 0)
// const product = arr.reduce((prevSum, el)=> (prevSum * el), 1)
// document.write(`${sum} <br>`)
// document.write(`${product}`)

//7
// const arr = [3, 9, 2,10];
// const sumEven = arr.reduce((prevSum, el)=> (el % 2 === 0 ? prevSum + el : prevSum ), 0)
// document.write(`${sumEven} <br>`)

//8
// const arr = [3, 9, 2,10, 13, 15];
// const sum = arr.reduce((prevSum, el)=> (el % 2 > 0 && el < 11 ? prevSum + el : prevSum ), 0)
// document.write(`${sum} <br>`)

//9
const arr = [3, 9, 21, 13, 15]; 
let sum = 0;
let hasEven = false; 

for (const el of arr) {
    if (el % 2 === 0) {
        hasEven = true;
        break; 
    }
    sum += el;
}

if (!hasEven) { 
    sum = arr.slice(1, -1).reduce((prevSum, el) => prevSum + el, 0);
}

document.write(`${sum} <br>`);
