"use strict"

const arr = [
//   0  1   2  3
    [1, 2, 3, 4], //0
    [5, 6, 7, 8],//1
    [1, 2, 1, 4], //2
    [5, 1, 7, 1],//3
]

const middleRow = Math.floor(arr.length / 2)
const rowLength = arr.length

//номери рядків від 0 до половини, стовпці від 0 до половини
let sum01 = 0
for (let row = 0; row < middleRow; row++) {
    for (let column = 0; column < Math.floor(arr[row].length/2); column++) {
        sum01 += arr[row][column]
    }
}
document.write(`Сума номерів рядків від 0 до половини, стовпці від 0 до половини :${sum01} <br>`)

// номери рядків від 0 до половини, стовпці від половини до кінця
let sum02 = 0
for (let row = 0; row < middleRow ; row++) {
    for (let column = Math.floor(arr[row].length/2); column < arr[row].length; column++) {
        sum02 += arr[row][column]
    }
}

document.write(`Сума номерів рядків від 0 до половини, стовпці від половини до кінця: ${sum02} <br>`)

// номери рядків (від половини до кінця, стовпці від 0 до половини)
let sum03 = 0
for (let row = middleRow; row < rowLength; row++) {
    for (let column = 0; column < Math.floor(arr[row].length/2); column++) {
        sum03 += arr[row][column]
    }
}

document.write(`Сума номерів рядків (від половини до кінця, стовпці від 0 до половини): ${sum03} <br>`)


// номери рядків від половини до кінця , стовпці від половини до кінця
let sum04 = 0
for (let row = middleRow; row < rowLength; row++) {
    for (let column = Math.floor(arr[row].length/2); column < arr[row].length; column++) {
        sum04 += arr[row][column]
    }
}

document.write(`Сума номерів рядків від половини до кінця , стовпці від половини до кінця: ${sum04} <br>`)


// Суму парних рядків
let sum05 = 0
for (let row = 0; row < rowLength; row+=2) {
    for (let column = 0; column < arr[row].length; column++) {
        sum05 += arr[row][column]
    }
}

document.write(`Сума парних рядків: ${sum05} <br>`)

// Суму непарних стовпців
let sum06 = 0
for (let row = 0; row < rowLength; row++) {
    for (let column = 1; column < arr[row].length; column+=2) {
        sum06 += arr[row][column]
    }
}

document.write(`Сума непарних стовпців: ${sum06} <br>`)


// У парних рядках – непарні стовпці, у непарних – парні.
let sum07 = 0
for (let row = 0; row < rowLength; row++) {
    if (row % 2 ===0) {
        for (let column = 1; column < arr[row].length; column+=2) {
            sum07 += arr[row][column]
        }
    } else {
        for (let column = 0; column < arr[row].length; column+=2) {
            sum07 += arr[row][column]
        }
    }
    
}

document.write(`У парних рядках – непарні стовпці, у непарних – парні: ${sum07} <br>`)

