// function min(nums) {
//   return Math.min(nums);
// }
// console.log(min([1, 3, 2]));
// const cube = (x) => x * x * x;
// console.log(cube(2));
// const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);
// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter((n) => n % 2);

// console.log(output);
// const player = {
//   name: { firstName: "Mashrafe", lastName: "Murtaza" },
//   age: 38,
// };

// console.log(player.firstName);
const players = [
  { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
  { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
  { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
  { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
];

const pl = players.map((player) => player.name.firstName);
console.log(pl);
