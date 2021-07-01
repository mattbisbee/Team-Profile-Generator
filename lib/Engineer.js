const Employee = require('./Employee');

class Engineer extends Employee {
  constructor (name, id, email, role, gitHub) {
    super(name, gitHub)
    this.gitHub = gitHub
    this.role = "Engineer"
  }

  getRole() {
    return this.role;
  }
  
  getGitHub(){
    return this.gitHub;
  }
}

module.exports = Engineer;