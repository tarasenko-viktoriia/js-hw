"use strict"
// Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).

const urls = [
   "http://example.com",
   "https://university.edu",
   "http://opensource.org",
   "https://example.com/about",
   "http://mysite.org/contact",
   "https://school.edu/news",
   "http://business.com/careers"
]

const domainCounts = new Map()

for (const url of urls) {
   const match = url.match(/\.(\w+)(\/|$)/)
   if (match) {
      const domain = match[1]
      if (domainCounts.has(domain)) {
         domainCounts.set(domain, domainCounts.get(domain) + 1)
      } else {
         domainCounts.set(domain, 1)
      }
   }
}

domainCounts.forEach((count, domain) => {
   document.write(`${domain}: ${count} <br>`)
})