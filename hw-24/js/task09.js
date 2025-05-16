"use strict"
// Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.

const mathClubStudents = ["Іванов", "Петров", "Ткачук",  "Засуха", "Бондаренко" ]

const historyClubStudents = ["Сергієнко","Данільченко", "Бондаренко", "Іванов"]

const setMathClub = new Set(mathClubStudents)
const setHistoryClub = new Set(historyClubStudents)

function countJointStudents(setMathClub, setHistoryClub){
   return setMathClub.intersection(setHistoryClub)
}
function countStudentsInBothClubs(setMathClub, setHistoryClub){
   return setMathClub.union(setHistoryClub)
}

const numJointStudents = countJointStudents(setMathClub, setHistoryClub).size
document.write(`Кількість студентів з гуртка з історії також відвідують гурток з математики: ${numJointStudents}<br>`)

const numStudentsInBothClubs = countStudentsInBothClubs(setMathClub, setHistoryClub).size
document.write(`Кількість студентів, що відвідують хоча б один гурток: ${numStudentsInBothClubs}`)
