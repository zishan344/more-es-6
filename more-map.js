const func = (p) => p.name;
const products = [{ name: "marouf" }, { name: "rohim" }, { name: "habib" }];
const output = [];
// for (const product of products) {
//   output.push(func(product));
// }
// console.log(output);
console.log(products[0].name);
const output2 = products.map((product) => product.name);
console.log(output2);
