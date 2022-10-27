
const grupiraj = (arr, fun) => {
  const myDict = {
    true: [],
    false: []
  }

  arr.forEach(i => {
    if (fun(i)) {
      myDict.true.push(i)
    } else {
      myDict.false.push(i)
    }
  })

  return myDict
}

function checkEven (num) {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

const array = [1, 2, 3, 4, 5]
console.log(grupiraj(array, checkEven))
