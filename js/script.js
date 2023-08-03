"use strict";
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

if (4 == 9) {
  console.log("OK");
} else {
  console.log("Error");
}

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("too much");
// } else {
//   console.log("Ok");
// }

// num === 50 ? console.log("Ok") : console.log("Error");

const num = 51;
switch (num) {
  case 49:
    console.log("Wrong");
    break;
  case 100:
    console.log("Wrong");
    break;
  case 50:
    console.log("Nice");
    break;
  default:
    console.log("Not today");
    break;
}
