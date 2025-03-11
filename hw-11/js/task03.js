"use strict"
// Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. 
// Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.   

if (confirm('Почати тестування?')) {
    function generateRandomTable(rowsNum, colsNum) {
        const arr = []
        for (let rowIndex = 0; rowIndex < rowsNum; rowIndex++) {
            arr.push([])
            for (let colIndex = 0; colIndex < colsNum; colIndex++) {
                arr[rowIndex].push(0)
            }
        }
        return arr
    }
    const arr = generateRandomTable(6,6)
    console.log(arr)

    let placedShips = 0
    while (placedShips < 5) {
        let randomRowIndex = Math.floor(Math.random() * 6)
        let randomColIndex = Math.floor(Math.random() * 6)

        if (arr[randomRowIndex][randomColIndex] === 0) {
            arr[randomRowIndex][randomColIndex] = 1
            placedShips++
        }
    }
    let sunkShips = 0 

    let shotsLeft = 10

    while (sunkShips < 5 && shotsLeft > 0) {
        let arrNumberRowForShot = parseInt(prompt(`Введіть номер клітинки рядка для пострілу. (Від 1 до 6)`))
        let arrNumberColForShot = parseInt(prompt(`Введіть номер клітинки стовпчика для пострілу. (Від 1 до 6)`))

        if (isNaN(arrNumberRowForShot) || isNaN(arrNumberColForShot) ||
            arrNumberRowForShot < 1 || arrNumberRowForShot > 6 ||
            arrNumberColForShot < 1 || arrNumberColForShot > 6) {
            alert("Введено некоректний номер клітинки.")
            continue
        }

        if (arr[arrNumberRowForShot - 1][arrNumberColForShot - 1] === 1) { 
            sunkShips++
            alert(`Влучив в корабель! Потоплено ${sunkShips} кораблів з 5.`)
            arr[arrNumberRowForShot - 1][arrNumberColForShot - 1] = 0
        } else {
            alert(`Не влучив!`)
        }

        shotsLeft--
    }
    if (sunkShips === 5) {
        document.write("Ви потопили всі кораблі! Перемога!")
    } else {
        document.write("Гра закінчена. У вас закінчилися постріли.")
    }
}
