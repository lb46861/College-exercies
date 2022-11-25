// Kreirati promise koji će se nakon 1000 ms resolve-ati u string „Resolved“, koristeći metodu
// setTimeout(). Funkcija koja je zadužena za printanje resolved promisa, se prosljeđuje u promise
// preko then() metode. (https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/
// Global_Objects/Promise )

function resolveFun () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolved')
    }, 1000)
  }).then((string) => console.log(string))
}

resolveFun()
