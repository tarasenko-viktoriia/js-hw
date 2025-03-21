"use strict"

const sites = [
    {
        company: "ABC",
        companyOwner: "Ivan",
        sponsors: [
            {
                surname: "Ivanov",
                name: "Pertro", 
                amountInvestment: 250,
            }, 
            {
                surname: "Kozlova",
                name: "Olga", 
                amountInvestment: 500,
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
                amountInvestment: 550,
            }, 
            {
                surname: "Kozlov",
                name: "Viktor", 
                amountInvestment: 500,
            }, 
        ],
        yearIssue: 2022,
        value: 15000
    },
    {
        company: "JGH",
        companyOwner: "Oleg",
        sponsors: [
            {
                surname: "Shevchenko",
                name: "Andriy", 
                amountInvestment: 100000,
            },
            {
                surname: "Melnyk",
                name: "Oksana", 
                amountInvestment: 750,
            }
        ],
        yearIssue: 2008,
        value: 2000
    }
]
// ==========1
const totalValue = sites.reduce((prevValue, site) => prevValue + site.value, 0)
document.write( `Загальна вартість усіх сайтів становить ${totalValue} <br>`)

// ==========2
const sitesBetween2000And2009 = sites.reduce((prevNum, site) => (site.yearIssue > 2000 && site.yearIssue < 2009) ? prevNum + 1: prevNum, 0)
document.write( `Кількість сайтів, що було зроблено між 2000 та 2009 рр.: ${sitesBetween2000And2009} <br>`)

// ==========3
const amountInvestmentMore100000 = sites.reduce((prevNum, site) => { 
    const totalInvestment = site.sponsors.reduce((prevSum, sponsor) => prevSum + sponsor.amountInvestment, 0)
    return totalInvestment > 100000 ? prevNum + 1 : prevNum;
}, 0);
document.write( `Кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${amountInvestmentMore100000} <br>`)

// ==========4
const sponsorsList = sites.map(({sponsors})=> ({sponsors}))
console.log(sponsorsList)

// ==========5

function getYearWhithLargestValue(sites) {
    let maxValue = -Infinity
    let yearWithMaxValue = 0
    for (const site of sites) {
        if (site.value > maxValue) {  
            maxValue = site.value;  
            yearWithMaxValue = site.yearIssue;  
        }
    }
    return yearWithMaxValue; 
}

const  yearWhithLargestValue =  getYearWhithLargestValue(sites)
document.write( `Рік, коли прибуток був найбільшим: ${yearWhithLargestValue} <br>`)

// ==========6

// function sortSitesByValue(sites) {
//     return sites.sort((a, b) => b.value - a.value); 
// }
// const sortedSites = sortSitesByValue(sites);

function bubbleSortSitesByValue(sites) {
    let n = sites.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (sites[j].value < sites[j + 1].value) {
                let temp = sites[j]
                sites[j] = sites[j + 1]
                sites[j + 1] = temp
            }
        }
    }
    return sites
}

const sortedSites = bubbleSortSitesByValue(sites)

console.log(sortedSites)

// ==========7

function getTwoArray(sites) {
    let arrWithValueMore10000 = []
    let arrWithValueLess10000 = []
    
    for (const site of sites) {
        if (site.value > 10000) {
            arrWithValueMore10000.push({...site})
        } else {
            arrWithValueLess10000.push({...site})  
        }
    }
    return [arrWithValueMore10000, arrWithValueLess10000]
}

const  [arrWithValueMore10000, arrWithValueLess10000] =  getTwoArray(sites)
console.log(arrWithValueMore10000)
console.log(arrWithValueLess10000)
