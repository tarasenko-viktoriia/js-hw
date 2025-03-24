"use strict"
// Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).


if (confirm('Почати тестування?')) {
    function generateRandomArr(arrLength) { 
        const arr = []
        for (let i = 0; i < arrLength; i++) {
            const userName = prompt("Введіть ваше ім'я на англійській мові")
            arr.push(userName.toLowerCase()) 
        }
        return arr
    }

    const arrNames = generateRandomArr(3)

    function generateCombinations(names, used = [], resArr = []) {
        if (resArr.length === names.length) document.write(`${resArr} <br>`)
    
    
        for (let i = 0; i < names.length; i++) {
            if (!used[i]) {
                used[i] = true
                resArr.push(names[i])
    
                generateCombinations(names, used, resArr)
    
                used[i] = false
                resArr.pop()
            }
        }
    }
    
    generateCombinations(arrNames)
}
