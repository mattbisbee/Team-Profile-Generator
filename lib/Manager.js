const Employee = require('./Employee');

class Manager extends Employee {
  constructor (name, id, email, role, officeNumber) {
    super (name, id, email)
    this.officeNumber = officeNumber
  }

  getRole() {
    return 'Manager';
  }

  getOfficeNumber() {
    return this.officeNumeber;
  }
}

module.exports = Manager;