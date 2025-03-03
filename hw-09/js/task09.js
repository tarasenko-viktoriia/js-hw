"use strict"

if (confirm('Почати тестування?')) {
    const usersName = ["Olga", "Viktor", "Ivan"];

    const newUserName = usersName.map((el) => el[0])
    document.write(newUserName)
}