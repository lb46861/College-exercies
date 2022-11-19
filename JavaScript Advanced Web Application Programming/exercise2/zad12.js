// Napisati funkciju simulacijaRazgovora koja će vratiti „hej“ ili „besmislica“ svako tri sekunde, u
// ovisnosti o tome je li riječ koja je prosljeđena u funkciju glasi „generator“. Nije dozvoljeno
// koristiti petlje, a funkcija simulacijaRazgovora će se pozvati samo jednom. (Pojašnjenje. koristiti
// generator funkciju. U funkciju simulacijaRazgovora se šalje niz stringova. Funkcija
// simulacijaRazgovora završava kada se za svaku riječ iz niza ispiše „besmislica“ ili „hej“.
// Hint -> clearInterval() se poziva kada je povrat iz next-a {value:undefined, done:true} ).

function * simulacijaRazgovora (words) {
  yield * words
}

const words = ['generator', 'null', '0', 'generator', 'generator', 'asdasd']
const gen = simulacijaRazgovora(words)

const start = setInterval(() => {
  const next = gen.next()
  if (next.done) {
    clearInterval(start)
  } else {
    next.value === 'generator' ? console.log('hej') : console.log('besmislica')
  }
}, 150)
