"use strict";
// const numberOfFilms = +prompt("How much films you already watched?", "");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// const a = prompt("Last film you watched?", ""),
//   b = prompt("How good is was?", ""),
//   c = prompt("Last film you watched?", ""),
//   d = prompt("How good is was?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// if (4 == 9) {
//   console.log("OK");
// } else {
//   console.log("Error");
// }

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("too much");
// } else {
//   console.log("Ok");
// }

// num === 50 ? console.log("Ok") : console.log("Error");

// const num = 50;
// switch (num) {
//   case 49:
//     console.log("Wrong");
//     break;
//   case 100:
//     console.log("Wrong");
//     break;
//   case 50:
//     console.log("Nice");
//     break;
//   default:
//     console.log("Not today");
//     break;
// }
// const hamburger = 5;
// const fries = null;
// if (hamburger && fries) {
//   console.log("Nice");
// }
// const hamburger = 2;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "adfdfaf");

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log("All right");
// } else {
//   console.log("We leave");
// }
const hamburger = 0;
const fries = null;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
  console.log("All right");
} else {
  console.log("We leave");
}
console.log(hamburger || cola || fries);

let johnReport,
  alexReport,
  samReport,
  mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);
