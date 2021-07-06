const fs = require('fs');
const inquirer = require('inquirer');

const formHTML = require('./src/formHTML')
const writeCopy = require('./writeCopy')

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

const entireTeam = []

function employeeInfo() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('An employee name is required!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'id',
      message: 'What is the ID number of this employee? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('An employee ID is required!');
          return false;
        }
      }
    },
    
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee\'s email address?(Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('An email address is required!');
          return false;
        }
      }
    },


    {
      type: 'list',
      name: 'role',
      message: "Select the role the employee has:",
      choices: ['Manager', 'Engineer', 'Intern']
    }
  ])
  .then(answers => {
    if (answers.role === 'Manager') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'office',
          message: 'Enter the Manager\'s office number. (Required)',
          validate: numData => {
            if(numData) {
              return true;
            } else {
              return 'An office number is required for all Managers!'
            }
          }
        }
      ])
      .then(response => {
        const managerStaff = new Manager (answers.name, answers.id, answers.email, answers.role, response.office)
        entireTeam.push(managerStaff);
        addMore();
      })
    } else if (answers.role === "Engineer") {

      inquirer.prompt ([
        {
          type: 'input',
          name: 'gitHub',
          message: 'Please enter a GitHub username. (Required)',
          validate: gitHubData => {
            if (gitHubData) {
              return true;
            } else {
              return 'A GitHub username is required for all Engineers.'
            }
          }
        }
      ])
      .then(response => {
        const engineerStaff = new Engineer (answers.name, answers.id, answers.email, answers.role, response.gitHub)
        entireTeam.push(engineerStaff);
        addMore();
      })
    } else if (answers.role === 'Intern') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: 'Enter the name of the school the Intern attends.(Required)',
          validate: schoolData => {
            if (schoolData) {
              return true;
            } else {
              return 'A school name is required for all Interns.'
            }
          }
        }
      ])
      .then(response => {
        const internStaff = new Intern (answers.name, answers.id, answers.email, answers.role, response.school)
        entireTeam.push(internStaff);
        addMore();
      })
    }

    function addMore() {
      inquirer.prompt ([
        {
          type: 'confirm',
          name: 'addmore',
          message: 'Would you like to add another Employee to the team profile?'
        }
      ])
      .then(response => {
        if (response.addmore === true){
          employeeInfo(entireTeam);
        } else {
          let addProfileCards = formHTML(entireTeam);
          writeCopy(addProfileCards)
        }
      })
    }
  })
}
employeeInfo()