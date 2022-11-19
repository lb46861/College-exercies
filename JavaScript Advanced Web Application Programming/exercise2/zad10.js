// Napisati „iterator funkciju“ koja prima string riječi odvojenih razmakom, te vraća objekt koji na
// sebi ima metodu next. Svakim pozivom metode next, vraća se jedna po jedna riječ.

function iterator (myStr) {
  const str = myStr
  const words = str.split(' ')
  let i = 0
  const inner = {
    next:
    function () {
      i++
      return words[i - 1]
    }
  }
  return inner
}

const arrayNext = iterator('This is a sentence with 7 words')

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
