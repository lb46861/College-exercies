
const movies = [
  { id: 1, title: "Pan's Labyrinth", score: 9 },
  { id: 37, title: 'Gentelman', score: 6 },
  { id: 11, title: 'Batman', score: 5 },
  { id: 44, title: 'Birds of Pray', score: 1 }
]

function movieSelector (movies) {
  // test - return movies.filter(temp => temp.score >= 6).map(temp => ({id: temp.id, title: temp.title.toUpperCase(), score: temp.score}));
  return movies.filter(temp => temp.score >= 6).map(temp => temp.title.toUpperCase())
}

console.log(movieSelector(movies))
