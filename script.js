let fruit = "apple";
console.log(fruit);

let country = "Nigeria";
let continent = "Africa";
let population = "200,000";

console.log(typeof country);
console.log(continent);
console.log(population);

// let BMI = mass / (height * height);

let heightMark = 1.69;
let heightJohn = 1.95;
let massMark = 78;
let massJohn = 92;

let markBMI = massMark / (heightMark * heightMark);
let johnBMI = massJohn / (heightJohn * heightJohn);

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`mark BMI is higher than John`);
  console.log(
    `Mark BMI of (${markBMI}) is higher than than john's (${johnBMI})`
  );
} else {
  console.log(`john BMI is higher than mark`);
}

// const fav = Number(prompt("what's your favourite number"));
// console.log(`your favourite number is ${fav}`);
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (96 + 108 + 89) / 3;
console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Dolphins wins 🏆");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log("Koalas wins 🏆");
} else if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log("draw game 🤝🤝");
} else {
  console.log("Nobody wins 😭");
}
// const que = prompt("input your age to get your drink");
// const drink = que >= 18 ? "gettat" : "yellooooooow12";
// console.log(drink);

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `the bill was ${bill},and the tip was ${tip},and the total was ${bill + tip}`
// );

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKolas = calcAverage(65, 154, 149);
console.log(scoreDolphins, scoreKolas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log("Dolphins don win");
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log("Koalas wins");
  } else {
    console.log("no team wins");
  }
};
checkWinner(scoreDolphins, scoreKolas);
checkWinner(1800, 600);

// age = 17;
// const yearsLeft = 18 - age;
// if (age >= 19) {
//   console.log(`guy don mature`);
// } else if ((age = 17)) {
//   console.log("e remain just a year");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`guy need to wait for ${yearsLeft} years more :)`);
// }
