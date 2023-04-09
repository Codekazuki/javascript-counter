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
