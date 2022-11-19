// Napisati funkciju koja prima niz i u njoj kreirati for petlju koja iterira kroz elemente niza i vraća
// sumu elemenata.
function arraySum (arr) {
  let sum = 0
  arr.forEach(element => {
    sum += element
  })
  return sum
}

const arr = [1, 2, 3, 4, 5]
console.log(arraySum(arr))
