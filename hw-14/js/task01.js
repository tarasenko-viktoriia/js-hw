"use strict"

const sites = [
    {
        company: "ABC",
        companyOwner: "Ivan",
        sponsors: [
            {
                surname: "Ivanov",
                name: "Pertro", 
                amountInvestment: 250
            }, 
            {
                surname: "Kozlova",
                name: "Olga", 
                amountInvestment: 500
            }, 
        ],
        yearIssue: 2024,
        value: 1000
    },
    {
        company: "DIF",
        companyOwner: "Viktor",
        sponsors: [
            {
                surname: "Ivanova",
                name: "Diana", 
                amountInvestment: 550
            }, 
            {
                surname: "Kozlov",
                name: "Viktor", 
                amountInvestment: 500
            }, 
        ],
        yearIssue: 2022,
        value: 1500
    },
    {
        company: "JGH",
        companyOwner: "Oleg",
        sponsors: [
            {
                surname: "Shevchenko",
                name: "Andriy", 
                amountInvestment: 1000
            },
            {
                surname: "Melnyk",
                name: "Oksana", 
                amountInvestment: 750
            }
        ],
        yearIssue: 2008,
        value: 2000
    }

]

const totalValue = sites.reduce((prevValue, site) => prevValue + site.value, 0)
document.write( `Загальна вартість усіх сайтів становить ${totalValue} <br>`)

const sitesBetween2000And2009 = sites.reduce((prevNum, site) => (site.yearIssue > 2000 && site.yearIssue < 2009) ? prevNum + 1: prevNum, 0)
document.write( `Кількість сайтів, що було зроблено між 2000 та 2009 рр.: ${sitesBetween2000And2009}`)

// const amountInvestmentMore100000 = sites.reduce((prevNum, site) => (site.yearIssue > 2000 && site.yearIssue < 2009) ? prevNum + 1: prevNum, 0)
// document.write( `Кількість сайтів, що було зроблено між 2000 та 2009 рр.: ${sitesBetween2000And2009}`)