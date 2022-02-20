const developer = {
  name: "marouf",
  email: "zishanahmed344@gmail.com",
  id: 234,
  home: { city: "ctg", upazila: "anowar" },
};
console.log(developer.back?.city);
const { name, email, id, home } = developer;
console.log(name, email);
const man = { name: "marouf", age: 18, home: "Anowara", id: 65 };
//access
const { name: name1, age: age1 } = man;
console.log(name1);
