// Kreirati „iterator funkciju“ koja prima niz i vraća objekt koji sadrži next metodu. Svaki poziv next
// metode vraća sljedeći element niza i njegov index u nizu (metoda next vraća niz koji se sastoji od
// dva člana).

function iterator (array) {
  let i = 0
  const inner = {
    next:
        function () {
          if (i >= array.length) {
            return [undefined, undefined]
          }
          const element = array[i]
          i++
          return [element, i - 1]
        }

  }
  return inner
}

const arrayNext = iterator([5, 4, 3, 2, 1])

const el1 = arrayNext.next()
const el2 = arrayNext.next()
const el3 = arrayNext.next()
const el4 = arrayNext.next()
const el5 = arrayNext.next()
const el6 = arrayNext.next()
const el7 = arrayNext.next()

console.log(el1)
console.log(el2)
console.log(el3)
console.log(el4)
console.log(el5)
console.log(el6)
console.log(el7)
