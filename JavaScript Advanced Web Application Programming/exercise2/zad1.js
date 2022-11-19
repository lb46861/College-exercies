// Napisati funkciju koja vraca funkciju after i prima dva argumenta. Prvi argument je broj koji
// predstavlja koliko puta funkcija after treba biti pozvana prije nego se izvrsi callback funkcija, a
// drugi argument je callback funkcija koja ce se izvrsiti. (hint closure)

function after () {
  console.log('after')
}

function callback () {
  console.log('callback')
}

function createFunction (it, callback) {
  for (let i = 0; i < it; i++) {
    after()
  }
  callback()
}

createFunction(3, callback)
