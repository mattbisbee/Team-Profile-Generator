const Employee = require('./Employee');

class Manager extends Employee {
  constructor (name, email, id, role, officeNumber) {
    super (name, id, email)
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