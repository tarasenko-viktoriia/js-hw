"use strict"

// Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

function generateSubsets(arr) {
   let result = []

   function backtrack(index, currentSubset) {
      result.push([...currentSubset])

      for (let i = index; i < arr.length; i++) {
         currentSubset.push(arr[i])
         backtrack(i + 1, currentSubset)
         currentSubset.pop()
      }
   }

   backtrack(0, [])
   return result
}

const arr = [1, 2, 3]
const subsets = generateSubsets(arr)
console.log(subsets)