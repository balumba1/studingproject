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

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Last film you watched?", ""),
//     b = prompt("How good is was?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log("Mala");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("Clasic");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Kinoman");
// } else {
//   console.log("Error");
// }

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
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//   console.log("All right");
// } else {
//   console.log("We leave");
// }
// console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

// let johnReport,
//   alexReport,
//   samReport,
//   mariaReport = "done";

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0);
// console.log( 5 === 5 && 3 > 1 || 5);
// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do{
//   onsole.log(num);
//   num++;
// }
// while(num<55);

// for(let i=1; i<10; i++){
//   if(i===6){
//     // break;
//     continue;
//   }
// console.log(i)
// }
// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }
// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "**";
//   }
//   result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) break first;
//       console.log(`Third: ${k}`);
//     }
//   }
// }
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)
