const Intern = require('../lib/Intern');

// creates intern object 
test('creates an intern object', () => {
    const intern = new Intern('John', 1, 'email@email.com', 'State College');
    expect(intern.school).toEqual(expect.any(String));
});

test('get employee school', () => {
    const intern = new Intern('John', 1, 'email@email.com', 'State College');
    
    expect(intern.getSchool()).toEqual(expect.any(String))
});

test('change role to intern', () => {
    const intern = new Intern('John', 1, 'email@email.com', 'State College');
    
    expect(intern.getRole()).toEqual('Intern')
});