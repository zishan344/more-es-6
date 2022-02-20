// function dubble(value = 4) {
//   return value * 2;
// }

// arrow.functionality;
const dubbleIt = (value) => value * 2;

const myArray = [2, 4, 5, 6, 7, 8, 9];
// const output = [];
// for (const number of myArray) {
//   //   const result = dubbleIt(number);
//   output.push(result);
// }
// console.log(output);

// using mapings
// const output2 = myArray.map(function (value) {
//   return value * 2;
// });
// const output3 = myArray.map(dubbleIt);
// console.log(output3);
const output4 = myArray.map((x) => x * 2);
console.log(output4);
