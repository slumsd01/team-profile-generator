class Manager {
    constructor (officeNumber) {
        this.officeNumber = officeNumber;
    }  

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }

};

module.exports = Manager;