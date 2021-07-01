const { test } = require('@jest/globals');
const Manager = require ('../lib/Manager');

test('Creates an Manager object', () => {
  const manager = new Manager;

  expect(typeof(manager)).toBe('object');
});

test('Puts in a name for the manager', () => {
  const name = "Matt";
  const manager = new Manager(name);
  expect(manager.name).toBe(name);
});

test('Puts in a role for the employee', () => {
  const role = "Manager";
  const manager = new Manager('Matt', '1484', 'Matt@testmail.com', role);
  expect(manager.role).toBe(role);
});

test('Puts in an office number for the manager', () => {
  const officeNumber = "A302";
  const manager = new Manager('Matt', '1484', 'Matt@test.com', 'Manager', officeNumber);
  expect(manager.officeNumber).toBe(officeNumber);
});

