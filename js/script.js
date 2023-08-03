const numberOfFilms = +prompt("How much films you already watched?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Last film you watched?", ""),
  b = prompt("How good is was?", ""),
  c = prompt("Last film you watched?", ""),
  d = prompt("How good is was?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
