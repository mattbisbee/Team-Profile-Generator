const Intern = require ('../lib/Intern');

test('Creates an Intern object', () => {
  const intern = new Intern;

  expect(typeof(intern)).toBe('object');
});

test('Puts in a name for the Intern', () => {
  const name = "Matt";
  const intern = new Intern(name);
  expect(intern.name).toBe(name);
});

test('Puts in a role for the employee', () => {
  const role = "Intern";
  const intern = new Intern('Matt', '1484', 'Matt@testmail.com', role);
  expect(intern.role).toBe(role);
});

test('Puts in a school name for the Intern', () => {
  const school = "engineerMatt@github.com";
  const intern = new Intern('Matt', '1484', 'Matt@test.com', 'Intern', school);
  expect(intern.school).toBe(school);
});