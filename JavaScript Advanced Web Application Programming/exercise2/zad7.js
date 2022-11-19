// Kreirati funkciju blackJack koja prima niz (brojevi od 1 do 11) i vraca funkciju (nazovimo je
// dealer). Funkcija dealer prima dva argumenta (dva broja) i vraca funkciju (nazovimo je player).
// Ako je funkcija player pozvana PRVI PUT, vraca sumu brojeva koji su argumenti funkcije dealer.
// Ako je funkcija player pozvana DRUGI PUT, vratiti ce sumu ranija dva argumenta i prvog clana
// niza, ukoliko je suma manja ili jednaka 21. Ako je veca od 21, funkcija player vraca string „bust!”.
// Ukoliko prethodna suma nije veca od 21, tada ce se svakim sljedecim pozivom funkcije player
// vratiti nova suma - zbroj posljednje sume i sljedeceg broja u nizu koji je prosljedjen funkciji
// blackJack. Ukoliko je nova suma veca od 21, povrat funkcije player je „bust!”. Ako je funkcija
// player vratila string „bust!”, tada ce svaki sljedeci poziv funcije player vratiti string „You are
// done!”. Ideja ovog zadatka je koristenje i shvacanje koncepta closure, te ga je obavezno korisiti.
function blackJack (arr) {
  function dealer (br1, br2) {
    let suma = 0
    let counter = 0
    let it = 0
    let bust = false
    function player () {
      if (it === 0) {
        console.log(br1 + br2)
        it++
      } else {
        if (!bust) {
          suma = br1 + br2 + arr[counter]
          if (suma <= 21) {
            console.log(suma)
          } else {
            console.log('bust!')
            bust = true
          }
        } else {
          console.log('You are done!')
        }
        counter++
      }
    }
    return player
  }
  return dealer
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const myFun = blackJack(arr)
const result = myFun(10, 9)
result()
result()
result()
result()
result()
