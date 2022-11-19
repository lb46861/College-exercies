// Nadopuniti zadatak 3 na nacin da next() funkcija vraca objekt sa vrijednostima value i done
// {value: vrijednost, done: false}. Property value sadrzi vrijednost trenutnog elementa niza, a
// property done ima vrijednost false sve dok se ne dodje do posljednjeg clana niza (tada mu se
// vrijednost mijenja u true). Ukoliko se next() funkcija poziva dalje, treba vratiti objekt koji sadrzi
// samo property done postavljen na true {done: true}.

function iterator (array) {
  let i = 0
  const inner = {
    next:
        function () {
          const el = array[i]
          if (i >= array.length) {
            return { done: true }
          } else if (i === array.length - 1) {
            i++
            return { value: el, done: true }
          } else {
            i++
            return { value: el, done: false }
          }
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

console.log(el1)
console.log(el2)
console.log(el3)
console.log(el4)
console.log(el5)
console.log(el6)
