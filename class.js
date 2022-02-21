class Support {
  name;
  constructor(name, home, town) {
    this.name = name;
    this.home = home;
    this.town = town;
  }
  home;
  town;

  startSessions() {
    console.log(this.name + " start the support session");
  }
}

const marouf = new Support("marouf", "Bangladesh", "ctg");
const aamir = new Support("amir khan", "india", "mombai");
// aamir.startSessions();
// marouf.startSessions();
console.log(marouf.startSessions());
console.log(aamir);
