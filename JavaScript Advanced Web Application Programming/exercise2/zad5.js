// Napisati „iterator funkciju“ koja kao argument prima niz elemenata, te vraća funkciju koja pri
// svakom pozivu vraća sljedeći član niza sa konkateniranim stringom „je n-ti element niza“. (hint.
// closure).

// function iterator (arr) {
//   function incrementCounter (el, index) {
//     console.log(el + ' je ' + index + '-ti element niza“')
//   }

//   arr.forEach((value, i) => incrementCounter(value, i))
// }

// const arr = [1, 2, 3, 4, 5]
// iterator(arr)

function outer (arr) {
  let counter = 0
  function incrementCounter () {
    if (counter + 1 > arr.length) {
      console.log('Velicina premasena')
    } else {
      console.log(arr[counter] + ' je ' + counter + '. element niza“')
      counter++
    }
  }
  return incrementCounter
}

const arr = [1, 2, 3, 4, 5]

const myFun = outer(arr)
myFun()
myFun()
myFun()
myFun()
myFun()
myFun()
myFun()
myFun()
