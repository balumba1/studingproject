"use strict";
// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("How much films you already watched?", "");

//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("How much films you already watched?", "");
//   }
// }

// start();

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

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Last film you watched?", "").trim(),
//       b = prompt("How good is was?", "").trim();

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Mala");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Clasic");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Kinoman");
//   } else {
//     console.log("Error");
//   }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; (i) => 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(
//       `Your favorite genre by number ${i}`
//     );
//   }
// }
// writeYourGenres();

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

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMessage("Hello World");
// console.log(num);

// function calc(a, b) {
//   return a + b;
// }

// console.log(calc(4, 3));

// function ret() {
//   let num = 50;
//   return num;
// }
// const anothernum = ret();
// console.log(anothernum);
// const logger = function () {
//   console.log("Hello");
// };
// logger();

// const calc = (a, b) => {
//   return a + b;
// };

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return;
//   }
//   console.log("Done");
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// const str = 'test';

// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';
//  console.log(fruit.indexOf("q"));

//  const logg = "Hello world";

//  console.log(logg.slice(6));

//  console.log(logg.substring(6, 11));

//  console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px"
// console.log(parseInt(test));
// console.log(parseFloat(test));

// function calculateVolumeAndArea(side) {
//   let volume = Math.pow(side, 3);
//   let lengthOfCube = Math.pow(side, 2) * 6;
//   if (typeof side !== "number" || side < 0 || !Number.isInteger(side)) {
//     console.log("Error");
//   } else {
//     console.log("Volume of cube:", volume);
//     console.log("Square of Cube:", lengthOfCube);
//   }
// }
// calculateVolumeAndArea(5);

// function getCoupeNumber(coupenumber) {
//   if (coupenumber === 0 || coupenumber > 36) {
//     console.log("This places is not avalible");
//     return;
//   }
//   if (
//     typeof coupenumber !== "number" ||
//     coupenumber < 0 ||
//     !Number.isInteger(coupenumber)
//   ) {
//     console.log("Check your place one more time pls");
//     return;
//   }
//   console.log(Math.ceil(coupenumber / 4));
// }
// getCoupeNumber(5);

// function getTimeFromMinutes(minutes) {
//   if (typeof minutes === String || !Number.isInteger(minutes) || minutes < 0) {
//     console.log("error");
//     return;
//   }
//   let hours = 0;
//   let min = minutes % 60;
//   hours = minutes / 60;
//   console.log("Hours:", Math.floor(hours), "Minutes:", min);
// }

// getTimeFromMinutes(-5);

// function findMaxNumber(a, b, c, d) {
//   if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     typeof c !== "number" ||
//     typeof d !== "number"
//   ) {
//     return 0;
//   } else {
//     console.log(Math.max(a, b, c, d));
//   }
// }
// findMaxNumber(4, 5, 1, 8);

// function fib(num) {
//   if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
//     return "";
//   }

//   let result = "";
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//     if (i + 1 === num) {
//       result += `${first}`;
//     } else {
//       result += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
//   }
//   console.log(result);
//   return result;
// }

// fib(0);

// function first() {
//   //Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }
// function second() {
//   console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback)
// {
//     console.log(`I Learn : ${lang}`);
//     callback();
// }

// function done()
// {
//     console.log('I pass this exam');
// }

// learnJS('JavaScript', done);

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function(){
//     console.log('Test');
//   }
// };
// options.makeTest();

// const {border, bg}= options.colors;
// console.log(border);
// console.log(Object.keys(options).length);

// console.log(options['colors']['border']);

// delete options.name;
// console.log(options);
// let counter = 0;
// for (let key in options) {
//   if (typeof (options[key] === "object")) {
//     for (let i in options[key]) {
//       console.log(`Svoistvo ${i} have ${options[key][i]}`);
//       counter ++;
//     }
//   } else {
//     console.log(`Svoistvo ${key} have ${options[key]}`);
//     counter++;
//   }
// }
//  console.log(counter);

// const arr = [1, 21, 13, 56, 48];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} inside array ${arr}`);
// });
// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// };
// const copy = obj; //Силка

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};
//   for (let key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20,
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();
// newArray[1] = "adasfadfda";
// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "vimeo", "rutube"],
//   blogs = ["wordpress", "livejournal", "blogger"],
//   internet = [...video, ...blogs, "vk", "facebook"];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);
// console.log(log);

// const array = ["a", "b"];
// const newAaray = [...array];

// const q = {
//   one: 1,
//   two: 2,
// };
// const newQ = {
//   ...q,
// };
