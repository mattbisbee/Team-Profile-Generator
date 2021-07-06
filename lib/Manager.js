const Employee = require('./Employee');

class Manager extends Employee {
  constructor (name, id, email, role, Office) {
    super (name, id, email, role)
    this.Office = Office
  }

  getRole() {
    return 'Manager';
  }

  getOfficeNumber() {
    return this.Office;
  }
}

module.exports = Manager;