"use strict"
// Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів. 

const students = [
   { name: "Іванов Іван", course: 1, faculty: "Фізико-математичний" },
   { name: "Петренко Олег", course: 2, faculty: "Історичний" },
   { name: "Коваленко Марія", course: 1, faculty: "Фізико-математичний" },
   { name: "Сидоренко Оксана", course: 3, faculty: "Філологічний" },
   { name: "Бондар Андрій", course: 2, faculty: "Історичний" },
   { name: "Гнатюк Леся", course: 4, faculty: "Медичний" },
   { name: "Чорний Павло", course: 1, faculty: "Медичний" },
]

const facultyList = students.map((student)=>student.faculty)
document.write(`Кількість різних факультетів: ${new Set(facultyList).size}<br>`)

const courseCounts = new Map()
for (const student of students) {
   const course = student.course
   if (courseCounts.has(course)) 
      courseCounts.set(course, courseCounts.get(course) + 1)
   else 
      courseCounts.set(course, 1)
}

courseCounts.forEach((count, course) => {
   document.write(`${count}: ${course} <br>`)
})