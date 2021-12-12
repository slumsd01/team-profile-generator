const Manager = require('../lib/Manager');

// creates manager object 
test('creates an manager object', () => {
    const manager = new Manager('John', 1, 'email@email.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get office number', () => {
    const manager = new Manager('John', 1, 'email@email.com', 7);
    
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('change role to manager', () => {
    const manager = new Manager('John', 1, 'email@email.com', 7);
    
    expect(manager.getRole()).toEqual('Manager')
});