const arr = [17, 34, 3, 12, 23]

function numSelectString (arr) {
  const str = arr.filter((i) => i % 2 !== 0).sort((a, b) => a - b).reduce((pr, curr) => String(pr) + ', ' + String(curr))
  return str
}

console.log(numSelectString(arr))
