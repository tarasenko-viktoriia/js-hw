"use strict"

// let arr = [35, 0, 250, -5, 69, -250, -86, 444, 0, 1, -58]
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

// let incomes = [
//     // 0  1  2  3  4  5  6
//     [1, 2, 5, 2, 1, 2, 9], // 0
//     [1, 2, 1, 2, 1, 2, 9], // 1
//     [1, 1, 5, 2, 1, 2, 9], // 2
//     [1, 6, 5, 2, 1, 2, 9], // 3
//     [1, 2, 23, 2, 1, 2, 9], // 4
//     [0, 1, 5, 2, 1, 2, 9], // 5
//     [1, 1, 54, 21, 1, 2, 9], // 6
//     [14, 11, 54, 21, 1, 2, 9], // 7
// ]
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

// let sum = 0
// for (let rowIndex = 0; rowIndex < incomes.length; rowIndex++) {
//     for (let colIndex = 0; colIndex < 5; colIndex++) {
//         sum += incomes[rowIndex][colIndex]
//     }
// }
// document.write(sum)

// const profits = [
//     [1200, 1500, 1700, 1600], // Прибуток за перший місяць
//     [1400, 1600, 1800, 1700], // Прибуток за другий місяць
//     [1300, 1550, 1750, 1650], // Прибуток за третій місяць
//     [1100, 1450, 1600, 1550], // Прибуток за четвертий місяць
//     [1250, 1500, 1850, 1800], // Прибуток за п’ятий місяць
//     [1350, 1600, 1900, 1700], // Прибуток за шостий місяць
//     [1450, 1700, 2000, 1800], // Прибуток за сьомий місяць
//     [1500, 1750, 2100, 1900], // Прибуток за восьмий місяць
//     [1550, 1800, 2200, 2000], // Прибуток за дев’ятий місяць
//     [1600, 1850, 2300, 2100], // Прибуток за десятий місяць
//     [1650, 1900, 2400, 2200], // Прибуток за одинадцятий місяць
//     [1700, 2000, 2500, 2300], // Прибуток за дванадцятий місяць
// ]

// let numVisitors = 0
// ---1
// for(let row of profits) {
//     for (let el of row) {
//         numVisitors += el
//     }
// }
// ----2
// for (let i = 0; i < profits.length; i++) {
//     for (let j = 0; j < profits[i].length; j++) {
//         numVisitors += profits[i][j]
//     }
// }
// document.write(numVisitors)

// let numVisitorsSummer = 0
// for (let i = 5; i <= 7; i++) {
//     for (let j = 0; j < profits[i].length; j++) {
//         numVisitorsSummer += profits[i][j]
//     }
// }
// document.write(numVisitorsSummer)

// let numVisitors = 0
// for (let i = 6; i < profits.length; i++) {
//     for (let j = 0; j < profits[i].length; j++) {
//         numVisitors  += profits[i][j]
//     }
// }
// document.write(numVisitors )

// let usersHeignts = [
//     [167, 176, 190, 171, 167], //0
//     [167, 176, 167], //1
//     [167, 176, 190, 171, 167, 145, 134], //2    usersHeignts[2]
//     [167, 176], //3
// ]

// let sum = 0
// ---1
// for (let i = 0; i < usersHeignts.length; i++) {
//     for (let j = 0; j < usersHeignts[i].length; j++) {
//         sum += usersHeignts[i][j]
//     }
// }
// ---2
// for (let row of usersHeignts) {
//     for (let el of row) {
//         sum +=el
//     }

// }
// document.write(sum)

// let max = -Infinity

// for (let row of usersHeignts) {
//     for (let el of row) {
//         if(el > max) max=el
//     }
// }
// document.write(max)



// for (let row of usersHeignts) {
//     let max = -Infinity
//     for (let el of row) {
//         if(el > max) max=el
//     }
//     document.write(`${max}<br>`)
// }

// let sum = 0
// let num = 0

// for (let i = 0; i < usersHeignts.length; i++) {
//     for (let j = 0; j < usersHeignts[i].length; j++) {
//         sum += usersHeignts[i][j]
//     }
//     num += usersHeignts[i].length
// }
// console.log (num)
// document.write(`${sum/num}`)


// for (let i = 0; i < usersHeignts.length; i++) {
//     let sum = 0
//     let num = 0
//     for (let j = 0; j < usersHeignts[i].length; j++) {
//         sum += usersHeignts[i][j]
//     }
//     num += usersHeignts[i].length
//     document.write(`${sum/num} <br>`)
// }

// const schoolsData = [
//     [
//         // Перший клас першої школи
//         [160, 165, 170, 150, 145, 180, 175, 155, 140, 165, 170],
//         // Другий клас першої школи
//         [
//             150, 160, 170, 180, 190, 150, 160, 165, 170, 175, 180, 185, 190,
//             145, 150,
//         ],
//         // Третій клас першої школи
//         [145, 150, 155, 160, 165, 170, 175, 180, 140, 145, 150],
//         // Четвертий клас першої школи
//         [
//             165, 170, 175, 160, 165, 170, 175, 180, 185, 190, 140, 145, 150,
//             155, 160,
//         ],
//         // П'ятий клас першої школи
//         [140, 145, 150, 155, 160, 165, 170, 175, 140, 145, 150],
//         // Шостий клас першої школи
//         [160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165],
//         // Сьомий клас першої школи
//         [150, 155, 160, 165, 170, 175, 180, 185, 190, 140, 145, 150],
//         // Восьмий клас першої школи
//         [145, 150, 155, 160, 165, 170, 175, 140, 145, 150, 155, 160],
//         // Дев'ятий клас першої школи
//         [
//             165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165, 170,
//             175, 180,
//         ],
//         // Десятий клас першої школи
//         [140, 145, 150, 155, 160, 165, 170, 175, 140, 145],
//         // Одинадцятий клас першої школи
//         [150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
//         ],
//         [
//         // Перший клас другої школи
//         [150, 155, 160, 165, 170, 175, 180, 145, 150, 155, 160, 165],
//         // Другий клас другої школи
//         [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 140, 145],
//         // Третій клас другої школи
//         [
//             160, 165, 170, 175, 180, 185, 190, 150, 160, 165, 170, 175, 180,
//             185,
//         ],
//         // Четвертий клас другої школи
//         [155, 160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160],
//         // П'ятий клас другої школи
//         [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150],
//         // Шостий клас другої школи
//         [
//             160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165,
//             170, 175,
//         ],
//         // Сьомий клас другої школи
//         [150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150],
//         // Восьмий клас другої школи
//         [145, 150, 155, 160, 165, 170, 175, 140, 145, 150],
//         // Дев'ятий клас другої школи
//         [165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165],
//         // Десятий клас другої школи
//         [140, 145, 150, 155, 160, 165, 170, 175, 140, 145],
//         // Одинадцятий клас другої школи
//         [150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
//         ],
//         [
//         // Перший клас третьої школи
//         [160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160],
//         // Другий клас третьої школи
//         [150, 155, 160, 165, 170, 175, 180, 185, 140, 145, 150],
//         // Третій клас третьої школи
//         [
//             140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150,
//             155, 160,
//         ],
//         // Четвертий клас третьої школи
//         [165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165, 170],
//         // П'ятий клас третьої школи
//         [150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
//         // Шостий клас третьої школи
//         [160, 165, 170, 175, 180, 185, 190, 150, 155, 160, 165],
//         // Сьомий клас третьої школи
//         [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 140, 145],
//         // Восьмий клас третьої школи
//         [155, 160, 165, 170, 175, 180, 185, 190, 150, 155, 160, 165],
//         // Дев'ятий клас третьої школи
//         [
//             140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150,
//             155,
//         ],
//         // Десятий клас третьої школи
//         [150, 155, 160, 165, 170, 175, 180, 185, 140, 145, 150],
//         // Одинадцятий клас третьої школи
//         [
//             160, 165, 170, 175, 180, 185, 190, 150, 155, 160, 165, 170, 175,
//             180,
//         ],
//     ],
// ]

// let max = -Infinity
// ----1
// for (let scholl of schoolsData) {
//     for (let classList of scholl) {
//         for (let pupilHeight of classList) {
//             if(pupilHeight > max) max=pupilHeight
//         }
//     }
// }
// ----2
// const max = Math.max(...schoolsData.flat(Infinity))
// ---3

// for (let schooll = 0; schooll < schoolsData.length; schooll++) {
//     for (let classList = 0; classList < schoolsData[schooll].length; classList++) {
//         for (let pupilIndex = 0; pupilIndex < schoolsData[schooll][classList].length; pupilIndex++) {
//             const pupilHeight = schoolsData[schooll][classList][pupilIndex]
//             if(pupilHeight>max) max = pupilHeight
//         }
//     }
// }
// document.write(max)

// const carSalesData = [
//     [
//       // Перша країна
//       [
//         // Перша область
//         [100, 150, 200], // Перше місто, продажі по трьох моделях
//         [120, 180, 220], // Друге місто, продажі по трьох моделях
//         [110, 140, 230], // Третє місто, продажі по трьох моделях
//       ],
//       [
//         // Друга область
//         [130, 160, 210], // Перше місто, продажі по трьох моделях
//         [140, 170, 240], // Друге місто, продажі по трьох моделях
//         [150, 180, 250], // Третє місто, продажі по трьох моделях
//       ],
//       [
//         // Третя область
//         [160, 190, 200], // Перше місто, продажі по трьох моделях
//         [170, 180, 230], // Друге місто, продажі по трьох моделях
//         [180, 200, 210], // Третє місто, продажі по трьох моделях
//       ],
//       [
//         // Четверта область
//         [190, 210, 240], // Перше місто, продажі по трьох моделях
//         [200, 220, 260], // Друге місто, продажі по трьох моделях
//         [210, 230, 250], // Третє місто, продажі по трьох моделях
//         [220, 240, 270], // Четверте місто, продажі по трьох моделях
//       ],
//     ],
//     [
//       // Друга країна
//       [
//         // Перша область
//         [120, 130, 150], // Перше місто, продажі по трьох моделях
//         [130, 140, 160], // Друге місто, продажі по трьох моделях
//         [140, 150, 170], // Третє місто, продажі по трьох моделях
//         [150, 160, 180], // Четверте місто, продажі по трьох моделях
//       ],
//       [
//         // Друга область
//         [160, 170, 180], // Перше місто, продажі по трьох моделях
//         [170, 180, 190], // Друге місто, продажі по трьох моделях
//         [180, 190, 200], // Третє місто, продажі по трьох моделях
//       ],
//       [
//         // Третя область
//         [190, 200, 210], // Перше місто, продажі по трьох моделях
//         [200, 210, 220], // Друге місто, продажі по трьох моделях
//         [210, 220, 230], // Третє місто, продажі по трьох моделях
//       ],
//       [
//         // Четверта область
//         [220, 230, 240], // Перше місто, продажі по трьох моделях
//         [230, 240, 250], // Друге місто, продажі по трьох моделях
//         [240, 250, 260], // Третє місто, продажі по трьох моделях
//         [250, 260, 270], // Четверте місто, продажі по трьох моделях
//       ],
//     ],
//     [
//       // Третя країна
//       [
//         // Перша область
//         [130, 140, 150], // Перше місто, продажі по трьох моделях
//         [140, 150, 160], // Друге місто, продажі по трьох моделях
//         [150, 160, 170], // Третє місто, продажі по трьох моделях
//       ],
//       [
//         // Друга область
//         [160, 170, 180], // Перше місто, продажі по трьох моделях
//         [170, 180, 190], // Друге місто, продажі по трьох моделях
//         [180, 190, 200], // Третє місто, продажі по трьох моделях
//       ],
//       [
//         // Третя область
//         [190, 200, 210], // Перше місто, продажі по трьох моделях
//         [200, 210, 220], // Друге місто, продажі по трьох моделях
//         [210, 220, 230], // Третє місто, продажі по трьох моделях
//       ],
//       [
//         // Четверта область
//         [220, 230, 240], // Перше місто, продажі по трьох моделях
//         [230, 240, 250], // Друге місто, продажі по трьох моделях
//         [240, 250, 260], // Третє місто, продажі по трьох моделях
//         [250, 260, 270], // Четверте місто, продажі по трьох моделях
//       ],
//     ],
//   ]

// const sum = carSalesData.flat(Infinity).reduce((prevSum, el) => prevSum + el)
// document.write(sum)


// ---1
// for (let modelIndex = 0; modelIndex <3; modelIndex++) {
//     let sum = 0
//     for(let country of carSalesData) {
//         for (let region of country) {
//             for (let city of region) {
//                 sum += city[modelIndex]
//             }
//         }
//     }
//     document.write(`${sum} <br>`)
// }

// ---2
// const modelSum = [0, 0, 0]
// for (let country of carSalesData) {
//     for( let region of country) {
//         for( let city of region ) {
//             for (let modelIndex = 0; modelIndex <city.length; modelIndex++) {
//                 modelSum[modelIndex] +=city[modelIndex]
//             }
//         }
//     }
// }
// document.write(`${modelSum} <br>`)

// for (let country of carSalesData) {
//     const sum = country.flat(Infinity).reduce((prevSum, el) => prevSum +el)
//     document.write(`${sum} <br>`)
// }
// for (let country of carSalesData) {
//     for (let region of country) {
//         for (let city of region) {
//             const sum = city .flat(Infinity).reduce((prevSum, el) => prevSum +el)
//             document.write(`${sum} <br>`)
//         }
//     }
// }