"use strict"

function generateRandomTable(rowsNum, colsNum, minValue = 1, maxValue = 100) {
  const arr = []
  for (let rowIndex = 0; rowIndex < rowsNum; rowIndex++) {
    arr.push([])
    for (let colIndex = 0; colIndex < colsNum; colIndex++) {
      const randomNum = minValue +Math.floor(Math.random() * (maxValue-minValue +1))
      arr[rowIndex].push(randomNum)
    }
  }
  return arr
}
const arr = generateRandomTable(4,4)

const middleRow = Math.floor(arr.length / 2)
const rowLength = arr.length

//номери рядків від 0 до половини, стовпці від 0 до половини
function getSumRowNum0HalfCol0Half(arr) {
  let sum = 0
  for (let row = 0; row < middleRow; row++) {
      for (let column = 0; column < Math.floor(arr[row].length/2); column++) {
          sum += arr[row][column]
      }
  }
  return sum
}
document.write(`Сума номерів рядків від 0 до половини, стовпці від 0 до половини :${getSumRowNum0HalfCol0Half(arr)} <br>`)

// номери рядків від 0 до половини, стовпці від половини до кінця
function getSumRowNum0HalfColHalfEnd(arr) {
  let sum = 0
  for (let row = 0; row < middleRow ; row++) {
      for (let column = Math.floor(arr[row].length/2); column < arr[row].length; column++) {
          sum += arr[row][column]
      }
  }
  return sum
}

document.write(`Сума номерів рядків від 0 до половини, стовпці від половини до кінця: ${getSumRowNum0HalfColHalfEnd(arr)} <br>`)

// номери рядків (від половини до кінця, стовпці від 0 до половини)
function getSumRowNumHalfEndCol0Half(arr) {
  let sum = 0
  for (let row = middleRow; row < rowLength; row++) {
      for (let column = 0; column < Math.floor(arr[row].length/2); column++) {
          sum += arr[row][column]
      }
  }
  return sum
}

document.write(`Сума номерів рядків (від половини до кінця, стовпці від 0 до половини): ${getSumRowNumHalfEndCol0Half(arr)} <br>`)


// номери рядків від половини до кінця , стовпці від половини до кінця
function getSumRowNumHalfEndColNumHalfEnd(arr) {
  let sum = 0
  for (let row = middleRow; row < rowLength; row++) {
      for (let column = Math.floor(arr[row].length/2); column < arr[row].length; column++) {
          sum += arr[row][column]
      }
  }
  return sum
}

document.write(`Сума номерів рядків від половини до кінця , стовпці від половини до кінця: ${getSumRowNumHalfEndColNumHalfEnd(arr)} <br>`)


// Суму парних рядків
function getSumEvenRows(arr) {
  let sum = 0
  for (let row = 0; row < rowLength; row+=2) {
      for (let column = 0; column < arr[row].length; column++) {
          sum += arr[row][column]
      }
  }
  return sum
}

document.write(`Сума парних рядків: ${getSumEvenRows(arr)} <br>`)

// Суму непарних стовпців
function getSumOddColumns(arr) {
  let sum = 0
  for (let row = 0; row < rowLength; row++) {
      for (let column = 1; column < arr[row].length; column+=2) {
          sum += arr[row][column]
      }
  }
  return sum
}

document.write(`Сума непарних стовпців: ${getSumOddColumns(arr)} <br>`)


// У парних рядках – непарні стовпці, у непарних – парні.
function getSumEvenRowsHaveOddColsOddRowsHaveEvenCols(arr) {
  let sum = 0
  for (let row = 0; row < rowLength; row++) {
    if (row % 2 ===0) {
        for (let column = 1; column < arr[row].length; column+=2) {
            sum += arr[row][column]
        }
    } else {
        for (let column = 0; column < arr[row].length; column+=2) {
            sum += arr[row][column]
        }
    }
  }
  return sum
}


document.write(`У парних рядках – непарні стовпці, у непарних – парні: ${getSumEvenRowsHaveOddColsOddRowsHaveEvenCols(arr)} <br>`)

