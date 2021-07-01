const Employee = require('./Employee');

class Intern extends Employee {
  constructor (name, id, email, role, school) {
    super(name, school)
    this.school = school;
    this.role = "Intern"
  }

  getRole() {
    return this.role;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern