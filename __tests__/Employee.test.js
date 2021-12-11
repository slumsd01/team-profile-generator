const Employee = require('../lib/Employee');

//creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('John', 1, 'email@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//get name from getName()
test('get employee name', () =>{
    const employee = new Employee('John', 1, 'email@email.com');

    expect(employee.getName()).toEqual(expect.any(String))
})

//get id
test('get employee id', () =>{
    const employee = new Employee('John', 1, 'email@email.com');

    expect(employee.getId()).toEqual(expect.any(Number))
})

//get email
test('get employee email', () =>{
    const employee = new Employee('John', 1, 'email@email.com');

    expect(employee.getEmail()).toEqual(expect.any(String))
})

//get role
test('get employee role', () =>{
    const employee = new Employee('John', 1, 'email@email.com');

    expect(employee.getRole()).toEqual('Employee')
})