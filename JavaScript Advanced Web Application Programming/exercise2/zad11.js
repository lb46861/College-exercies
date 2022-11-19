// Riješiti prethodni zadatak koristeći generator funkciju.

function * createFlow (myStr) {
  const str = myStr.split(' ')
  let index = 0
  while (true) {
    yield str[index++]
  }
}

const arrayNext = createFlow('This is a sentence with 7 words')
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
