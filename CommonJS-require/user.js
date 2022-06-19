class User {
  constructor(name, age, address) {
    (this.name = name), (this.age = age), (this.address = address);
  }
  writeUser() {
    return `name:${this.name}, age:${this.age}, address:${this.address}`;
  }
}

let user = new User("Satik", 37, "Armavir");
console.log(user.writeUser());
module.exports = user.writeUser();
