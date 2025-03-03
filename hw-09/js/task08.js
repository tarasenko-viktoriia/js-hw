"use strict"

if (confirm('Почати тестування?')) {
    const carNumbers = ["A123BC", "B777AA", "AA111AA", "A999AA", "C555C"]

    const newArrCarNumber = [] 

    carNumbers.map((el) => {
        if (el[0] === "A") { 
            newArrCarNumber.push(el)
        }
    })
    document.write(newArrCarNumber)
}