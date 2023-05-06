// let fruit = "apple";
// console.log(fruit);

// let country = "Nigeria";
// let continent = "Africa";
// let population = "200,000";

// console.log(typeof country);
// console.log(continent);
// console.log(population);

// // let BMI = mass / (height * height);

// let heightMark = 1.69;
// let heightJohn = 1.95;
// let massMark = 78;
// let massJohn = 92;

// let markBMI = massMark / (heightMark * heightMark);
// let johnBMI = massJohn / (heightJohn * heightJohn);

// console.log(markBMI, johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markBMI > johnBMI) {
//   console.log(`mark BMI is higher than John`);
//   console.log(
//     `Mark BMI of (${markBMI}) is higher than than john's (${johnBMI})`
//   );
// } else {
//   console.log(`john BMI is higher than mark`);
// }

// // const fav = Number(prompt("what's your favourite number"));
// // console.log(`your favourite number is ${fav}`);
// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (96 + 108 + 89) / 3;
// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//   console.log("Dolphins wins 🏆");
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//   console.log("Koalas wins 🏆");
// } else if (
//   averageDolphins === averageKoalas &&
//   averageDolphins >= 100 &&
//   averageKoalas >= 100
// ) {
//   console.log("draw game 🤝🤝");
// } else {
//   console.log("Nobody wins 😭");
// }
// // const que = prompt("input your age to get your drink");
// // const drink = que >= 18 ? "gettat" : "yellooooooow12";
// // console.log(drink);

// // const bill = 430;
// // const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // console.log(
// //   `the bill was ${bill},and the tip was ${tip},and the total was ${bill + tip}`
// // );

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKolas = calcAverage(65, 154, 149);
// console.log(scoreDolphins, scoreKolas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log("Dolphins don win");
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log("Koalas wins");
//   } else {
//     console.log("no team wins");
//   }
// };
// checkWinner(scoreDolphins, scoreKolas);
// checkWinner(1800, 600);

// // age = 17;
// // const yearsLeft = 18 - age;
// // if (age >= 19) {
// //   console.log(`guy don mature`);
// // } else if ((age = 17)) {
// //   console.log("e remain just a year");
// // } else {
// //   const yearsLeft = 18 - age;
// //   console.log(`guy need to wait for ${yearsLeft} years more :)`);
// // }

// const disciples = ["john", "Peter", "Judas", "Matthew"];
// console.log(disciples[0], disciples[2]);

// function calcTip(bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
//   return tip;
// }
// const bills = [125, 555, 44];
// const tip = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// const total = [
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[bills.length - 1]) + bills[2],
// ];
// console.log(tip);
// console.log(total);

// const coach = {
//   firstName: "Ayodele",
//   lastName: "agbowuro",
//   friends: ["ade", "boaz", "chuks"],
// };

// console.log(
//   `${coach.firstName} has ${coach.friends.length} friends and his best friend is called ${coach.friends[0]}`
// );

// const person = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const person2 = {
//   fullName: "John smith",
//   mass: 192,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// person.calcBMI();
// person2.calcBMI();

// console.log(person.bmi);
// console.log(person2.bmi);

// if (person2.bmi > person.bmi) {
//   console.log(
//     `${person2.fullName}'s BMI (${person2.calcBMI()}) is higher than ${
//       person.fullName
//     }'s ${person.calcBMI()}!`
//   );
// } else {
//   console.log(
//     `${person.fullName}'s BMI (${person.calcBMI()}) is higher than ${
//       person2.fullName
//     }'s ${person2.calcBMI()}!`
//   );
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`this thing sweet ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`i am triying ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`dice is ${dice} so loop go stop`);
//   }
// }
// const hello = function (a, b) {
//   return a - b;
// };
// console.log(hello(4, 9));
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;
// }
// do {
//   text += "The number is " + i;
//   i++;
// } while (i < 10);

const hover = document.querySelector(".items");

hover.addEventListener("click", function () {
  if (color == red) {
    color: green;
  } else {
    yellow;
  }
});

const image = document.getElementById("image");
const buttonMi = document.getElementById("box");
buttonMi.addEventListener("click", function (e) {
  alert("its working");
});
image.addEventListener("click", function (e) {
  alert("its very much working");
});
