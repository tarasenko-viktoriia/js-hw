"use strict"

if (confirm('Почати тестування?')) {
    function getRandomArr(el, start, end) {
        const arr = []
        for (let i = 0; i < el; i++) {
            const randomElement = start + Math.floor(Math.random() * (end - start + 1) )
            arr.push(randomElement)
        }
        return arr
    }
    const randomArr = getRandomArr(10, -50, 200)

    randomArr.forEach((el, index, baseArrRef) => {
       if (el > baseArrRef[0]) baseArrRef[index] *= 2
    })
    document.write (randomArr)
}