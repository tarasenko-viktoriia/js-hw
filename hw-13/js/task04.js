"use strict"
// Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.
if (confirm('Почати тестування?')) {
    function generatingArraysBoysAndGirls() {
        const boysArr = []
        const girlsArr = []
        
        while (true) {
            let boysName = prompt("Введіть ім'я хлопчика (або натисніть 'Скасувати' для завершення)")
            if (boysName === null) break
            boysArr.push(boysName); 
        }

        while (true) {
            let girlName = prompt("Введіть ім'я дівчинки (або натисніть 'Скасувати' для завершення)")
            if (girlName === null) break
            girlsArr.push(girlName)
        }

        return [boysArr, girlsArr]
    }

    const [boys, girls] = generatingArraysBoysAndGirls ()


    function generateDancePairs(boys, girls, index = 0, pairs = []) {
        if (index >= boys.length) {  
            return pairs 
        }

        for (let girl of girls) {  
            pairs.push(`${boys[index]} - ${girl}`)
        }

        return generateDancePairs(boys, girls, index + 1, pairs) 
    }

    const result = generateDancePairs(boys, girls);
    document.write(result)
}