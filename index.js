const fs = require('fs');
const inquirer = require('inquirer');


const style = require('./src/style')
const template = require('./src/template')

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")


const promptTeamName = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'teamname',
      message: 'What is the name of your team?',
      validate: teamNameInput => {
        if (teamNameInput) {
          return true;
        } else {
          console.log('Please enter a team name!');
          return false;
        }
      }
    },
  ]);
}

const employeeInfo = employeeData => {
  console.log(`
  ==================
  Add a New Employee
  ==================
  `);

  if (!employeeData.teamMember) {
    employeeData.teamMember = []
  }
  return inquirer
  .prompt([

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
          console.log('An employee name is required!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is the employee\'s email adderess?(Required)',
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
          name: 'officeNumber',
          message: 'Enter office number. (Required)',
          validate: numInput => {
            if(numInput) {
              return true;
            } else {
              return "An office number is required for members of management!"
            }
          }
        }
      ])
      .then(res => {
        const managerTeam = new Manager (answers.name, answers.email, answers.id, answers.role, res.office)
      })
    }
  })
}

promptTeamName()
  .then(employeeInfo)
  .then