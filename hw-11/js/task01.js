"use strict"

let arr = [35, 0, 250, -5, 69, -250, -86, 444, 0, 1, -58]
// const winArr = arr.filter((el)=> el>0)
// document.write(winArr)

// arr.forEach((el)=> {
//     if(el>0) document.write(`${el} <br>`)
// })

// arr.forEach((el, ind, arr)=> {
//     if(el>0) arr[ind] *=0.8
// })
// document.write(`${arr} <br>`)

// const dolArr = arr.map((el)=> el/40)
// document.write(`${ dolArr} <br>`)

// const sum = arr.reduce((prevSum, el) => prevSum+el)
// document.write(`${ sum} <br>`)

// const sum = arr.reduce((prevSum, el) => el>0 ? prevSum+el : prevSum, 0)
// document.write(`${ sum} <br>`)

// const sum = arr.reduce((prevSum, el) => el<0 ? prevSum+el : prevSum, 0)
// document.write(`${ sum} <br>`)

// // ----1
// console.log(arr.includes(0))
// // ----2
// console.log(arr.some(el=> el===0))

// const numZero = arr.reduce((prevSum, el) => el===0 ? prevSum+1 : prevSum, 0)
// document.write(`${ numZero} <br>`)

// const numMore100 = arr.reduce((prevSum, el) => el > 100 ? prevSum+1 : prevSum, 0)
// document.write(`${numMore100} <br>`)

// const arr2 = arr.slice(arr.indexOf(0)+1)
// document.write(`${arr2} <br>`)

// const arr2 = arr.slice(arr.lastIndexOf(0)+1)
// document.write(`${arr2} <br>`)

// arr = arr.filter(el => el >=20)
// document.write(`${arr} <br>`)

// arr = arr.filter(el => el !==0)
// document.write(`${arr} <br>`)

// arr.splice(arr.includes(0), 1)
// document.write(`${arr} <br>`)

// arr.sort((a,b)=> a-b)
// document.write(`${arr} <br>`)

// arr.sort((a,b)=> b-a)
// document.write(`${arr} <br>`)

// arr.sort((a,b)=> {
//     let result
//     if (a<0 && b>=0) result = -1
//     else if (a>=0 && b<0) result = 1
//     else result = 0 

//     return result
// })
// document.write(`${arr} <br>`)

// arr.sort((a,b)=> {
//     let result
//     if (a<0 && b>=0) result = -1
//     else if (a>=0 && b<0) result = 1
//     else result = a<0 ? 0 : a- b 

//     return result
// })
// document.write(`${arr} <br>`)

// arr.sort((a,b)=> {
//     let result
//     if (a<0 && b>=0) result = -1
//     else if (a>=0 && b<0) result = 1
//     else result = a >= 0 ? 0 : a - b

//     return result
// })
// document.write(`${arr} <br>`)


// arr.sort((a,b)=> {
//     let result
//     if (a===0 && b!==0) result = -1
//     else if (a!==0 && b===0) result = 1
//     else result = a- b 

//     return result
// })
// document.write(`${arr} <br>`)

// arr.sort((a,b)=> {
//     let result
//     if (a===0 && b!==0) result = -1
//     else if (a!==0 && b===0) result = 1
//     else result = b - a 

//     return result
// })
// document.write(`${arr} <br>`)

// arr.sort((a,b)=> {
//     let result
//     if (a > 200 && b<=200) result = -1
//     else if (a<=200 && b>200) result = 1
//     else result = 0

//     return result
// })
// document.write(`${arr} <br>`)

let incomes = [
    // 0  1  2  3  4  5  6
    [1, 2, 5, 2, 1, 2, 9], // 0
    [1, 2, 1, 2, 1, 2, 9], // 1
    [1, 1, 5, 2, 1, 2, 9], // 2
    [1, 6, 5, 2, 1, 2, 9], // 3
    [1, 2, 23, 2, 1, 2, 9], // 4
    [0, 1, 5, 2, 1, 2, 9], // 5
    [1, 1, 54, 21, 1, 2, 9], // 6
    [14, 11, 54, 21, 1, 2, 9], // 7
]
//  ---1
// let sum = 0
// for (let row of incomes) {
//     for (let el of row) {
//         sum += el
//     }
// }

//---2
// for (let rowIndex = 0; rowIndex < incomes.length; rowIndex++) {
//     for (let colIndex = 0; colIndex < incomes[rowIndex].length; colIndex++) {
//         sum += incomes[rowIndex][colIndex]
//     }
// }
// document.write(sum)