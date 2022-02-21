// class Support {
//   name;
//   constructor(name, home, town) {
//     this.name = name;
//     this.home = home;
//     this.town = town;
//   }
//   home;
//   town;

//   startSessions() {
//     console.log(this.name + " start the support session");
//   }
// }

// const marouf = new Support("marouf", "Bangladesh", "ctg");
// const aamir = new Support("amir khan", "india", "mombai");
// // aamir.startSessions();
// // marouf.startSessions();
// console.log(marouf);
// console.log(aamir);
// class PersonClass {
//   constructor(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
// }

// class TeacherClass extends PersonClass {
//   constructor(name, age, job, subject) {
//     super(name, age, job);
//     this.subject = subject;
//   }
//   start_session() {
//     console.log(`${this.name} start the support session `);
//   }
// }
// const rk = new TeacherClass("Rk", 21, "gorebedao", "dostomir");
// rk.start_session();
// console.log(rk.job);

// class PersonClassMeth {
//   constructor(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
//   dateOfBirth() {
//     console.log(`${this.name} boron in ${2021 - this.age}`);
//   }
// }

// class TeacherClassMeth extends PersonClassMeth {
//   constructor(name, age, job, subject) {
//     super(name, age, job);
//     this.subject = subject;
//   }
// }

// const ourSirMeth = new TeacherClassMeth(
//   "shafiq sir",
//   46,
//   "Assistant teacher",
//   "physics"
// );
// console.log(ourSirMeth.dateOfBirth());
// const marouf = new PersonClassMeth("marouf", 18, "techers");
// console.log(marouf);

class Person {
  constructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
  }
  bronDate() {
    return `${this.name} bron ${2021 - this.age}`;
  }
}

class Teacher extends Person {
  constructor(name, address, age, subject, salary) {
    super(name, address, age);
    this.subject = subject;
    this.salary = salary;
  }
}

const teacher = new Teacher("marouf", "Bangladesh", 18, "math", 10000);
console.log(teacher.bronDate());
