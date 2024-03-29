const { faker } = require("@faker-js/faker");

class Usuario {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.nombre = faker.person.firstName();
    this.apellido = faker.person.lastName();
    this.telefono = faker.phone.number();
    this.email = faker.internet.email({
      firstName: this.nombre,
      lastName: this.apellido,
    });
    this.passwoord = faker.internet.password({
      length: 10,
      memorable: true,
    });
  }
}

module.exports = Usuario;