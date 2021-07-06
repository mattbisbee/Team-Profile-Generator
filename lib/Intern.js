const Employee = require('./Employee');

class Intern extends Employee {
  constructor (name, id, email, role, School) {
    super(name, id, email, role)
    this.School = School;
  }

  getRole() {
    return 'Intern';
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern