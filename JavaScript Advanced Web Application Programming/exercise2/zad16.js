// Promisi su asinhroni i sada ćemo to i dokazati. Kreirati promise koji će se resolve-ati sa
// vrijednošću „Promise has been resolved!“. Nakon toga ubaciti sljedeći kod:
// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");
// Koji redosljed ispisa očekujete? Zašto?

const promiseFun = Promise.resolve('I am the promise')

promiseFun.then((value) => {
  console.log(value)
})
console.log("I'm not the promise!")
