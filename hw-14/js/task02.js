"use strict"
// Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців            

let userDate = {
    day: 4,
    month: 12,
    year: 2022,
}

function getYearInN({month, year}, N) {
    return year + Math.floor((month - 1 + N) / 12)
}
document.write(getYearInN(userDate, 15))