const { test, expect } = require('@jest/globals');
const Employee = require ('../lib/Employee');

test('Creates an employee object', () => {
  const employee = new Employee;

  expect(typeof(employee)).toBe('object');
});

test('Puts in a name for the employee', () => {
  const name = "Matt";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test('Puts in an id for the employee', () => {
  const id = "1484";
  const employee = new Employee('Matt', id);
  expect(employee.id).toBe(id);
});

test('Puts in an email address for the employee', () => {
  const email = "Matt@testmail.com";
  const employee = new Employee('Matt', '1484', email);
  expect(employee.email).toBe(email);
});

test('Puts in a role for the employee', () => {
  const role = "Employee";
  const employee = new Employee('Matt', '1484', 'Matt@testmail.com', role);
  expect(employee.role).toBe(role);
});

