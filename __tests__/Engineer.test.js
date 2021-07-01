const Engineer = require ('../lib/Engineer');

test('Creates an Engineer object', () => {
  const engineer = new Engineer;

  expect(typeof(engineer)).toBe('object');
});

test('Puts in a name for the Engineer', () => {
  const name = "Matt";
  const engineer = new Engineer(name);
  expect(engineer.name).toBe(name);
});

test('Puts in a role for the employee', () => {
  const role = "Engineer";
  const engineer = new Engineer('Matt', '1484', 'Matt@testmail.com', role);
  expect(engineer.role).toBe(role);
});

test('Puts in a gitHub address for the Engineer', () => {
  const gitHub = "engineerMatt@github.com";
  const engineer = new Engineer('Matt', '1484', 'Matt@test.com', 'Engineer', gitHub);
  expect(engineer.gitHub).toBe(gitHub);
});