class User {
  static #ROLES = ["user", "guest", "admin"];

  constructor(name) {
    this.name = name;
  }

  static getRoles() {
    return this.#ROLES;
  }
}
console.log(User.getRoles()); // ["user", "guest", "admin"]
let user = new User("john");
console.log(user.name);
console.log(user.getRoles()); // Uncaught TypeError: user.getRoles is not a function
