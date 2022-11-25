// Kreirati promise koji će se odmah reject-ati. Iz funkcije koja se pozvala kada je promise reject-an
// printati „Error“(hint. nad promise objektom pozvati metodu catch).

const promiseFun = new Promise((resolve, reject) => {
  throw Error('Something went wrong')
})

promiseFun.catch((error) => {
  console.error(error)
})
