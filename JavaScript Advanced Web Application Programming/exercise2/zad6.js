// Kreirati funkciju russianRoulette koja prima jedan argument (broj, nazovimo ga n), i vraca
// funkciju. Vracena funkcija ne prima argumente, a vraca stirng „click!” prvih n – 1 poziva. Prilikom
// n-tog poziva, funkcija ce vratiti string „bang”. Svakim sljedecim pozivom funkcije, povratna
// vrijednost ce biti string „reload to play again”. (hint „closure”)

function russianRoulette (n) {
  let counter = 0
  function bang () {
    if (counter >= n) {
      console.log('reload to play again')
    } else if (counter === n - 1) {
      console.log('bang')
    } else {
      console.log('click!')
    }
    counter++
  }
  return bang
}

const myFun = russianRoulette(5)
myFun()
myFun()
myFun()
myFun()
myFun()
myFun()
