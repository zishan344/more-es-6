const products = [
  { name: "white board", price: 304, quantity: 3, color: "white" },
  { name: "samsung mobile", price: 15000, quantity: 1, color: "blue" },
  { name: "nokia mobile", price: 4545, quantity: 2, color: "pink" },
  { name: "glass", price: 3, quantity: 5, color: "white" },
  { name: "lapto", price: 455, quantity: 3, color: "white" },
];

// const items = products.filter((item) => item.price > 1000);
// console.log(items);

const items2 = products.find((item) => item.price > 1000);
console.log(items2);
