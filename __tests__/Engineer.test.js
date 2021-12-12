const Engineer = require('../lib/Engineer');

// creates engineer object 
test('creates an engineer object', () => {
    const engineer = new Engineer('John', 1, 'email@email.com', 'Engineer', 'johndoe1');
    
    expect(engineer.github).toEqual(expect.any(String));
});

test('get employee github', () => {
    const engineer = new Engineer('John', 1, 'email@email.com', 'Engineer', 'johndoe1');
    
    expect(engineer.getGithub()).toEqual(expect.any(String))
});

test('change role to engineer', () => {
    const engineer = new Engineer('John', 1, 'email@email.com', 'Engineer', 'johndoe1');
    
    expect(engineer.getRole()).toEqual('Engineer')
});