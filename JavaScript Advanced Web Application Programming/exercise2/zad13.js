// Koristeći async await pattern, ispisati rečenicu koja se sastoji od imenice i glagola. Pozvati async
// funkciju i prosljediti joj imenicu. Unutar async funkcije koristiti ključnu riječ await kako bi se
// dobio povrat iz ne-async-funkcije koja prima imenicu i konkatenira hardkodirani glagol i to vraća.
// Povrat ispisati nakon tri sekunde.

function myFun (imenica) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('trcati ' + imenica)
    }, 3000)
  })
}

async function asyncFun (word) {
  const result = await myFun(word)
  console.log(result)
}

asyncFun('maraton')
