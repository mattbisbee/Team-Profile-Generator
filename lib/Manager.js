const Employee = require('./Employee');

class Manager extends Employee {
  constructor (name, id, email, role, officeNumber) {
    super (name, officeNumber)
    this.officeNumber = officeNumber
    this.role = "Manager"
  }

  getRole() {
    return this.role;
  }

  getOfficeNumber() {
    return this.officeNumeber;
  }
}

module.exports = Manager;